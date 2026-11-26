// app.js - state, events and rendering.  Flow: user acts -> update state -> save -> redraw
const $ = id => document.getElementById(id);
const DEFAULTS = { roleId: ROLES[0].id, completedSkillIds: [], hoursPerWeek: 10 };
let state = Object.assign({}, DEFAULTS, loadState());
const openSkills = new Set(); // keeps opened skill details open after a redraw

const getRole = () => ROLES.find(r => r.id === state.roleId) || ROLES[0];
const ytLink = name => 'https://www.youtube.com/results?search_query=' + encodeURIComponent(name + ' tutorial for beginners');

function update(change) { change(); saveState(state); render(); }

function renderRoles() {
  const chip = r => `<button type="button" class="chip ${r.id === state.roleId ? 'active' : ''}" data-role="${r.id}">${r.name}${r.future ? '<span class="badge">FUTURE</span>' : ''}</button>`;
  const core = ROLES.filter(r => !r.future);
  const future = ROLES.filter(r => r.future);
  $('roles').innerHTML =
    `<div class="role-group-label">Core Career Roles (${core.length})</div>` + core.map(chip).join('') +
    `<div class="role-group-label">Future &amp; Emerging Roles 2026–2030 (${future.length})</div>` + future.map(chip).join('');
  $('hours').value = state.hoursPerWeek;
  const role = getRole();
  const studyLinks = (role.studyFrom || []).map(([name, url]) =>
    `<a href="${url}" target="_blank" rel="noopener">${name}</a>`).join('');
  const ghLink = role.github
    ? `<a class="gh" href="${role.github[1]}" target="_blank" rel="noopener">${role.github[0]}</a>`
    : '';
  const ytCourseLink = role.youtube
    ? `<a class="yt" href="${role.youtube[1]}" target="_blank" rel="noopener">${role.youtube[0]}</a>`
    : '';
  $('role-info').innerHTML = `
    ${ghLink ? `<div class="role-info-row"><b>GitHub Roadmap / Repo:</b> ${ghLink}</div>` : ''}
    ${ytCourseLink ? `<div class="role-info-row"><b>Best YouTube Learning:</b> ${ytCourseLink}</div>` : ''}
    ${studyLinks ? `<div class="role-info-row"><b>Where to study from:</b> ${studyLinks}</div>` : ''}`;
}

function renderSkills() {
  const role = getRole(), cats = [...new Set(role.skills.map(s => s.category))];
  $('skills').innerHTML = cats.map(c =>
    `<div class="cat">${c}</div>` + role.skills.filter(s => s.category === c).map(s => {
      const on = state.completedSkillIds.includes(s.id);
      return `<label class="skill ${on ? 'on' : ''}"><input type="checkbox" data-skill="${s.id}" ${on ? 'checked' : ''}>${s.name}<span class="h">${s.hours}h</span></label>`;
    }).join('')).join('');
}

function renderScore() {
  const role = getRole(), missing = getMissing(role, state.completedSkillIds);
  const pct = getReadiness(role, state.completedSkillIds);
  const hrs = missing.reduce((t, s) => t + s.hours, 0);
  const weeks = buildPlan(missing, state.hoursPerWeek).length;
  $('score').innerHTML = `<div class="big">${pct}%</div>
    <div class="bar"><div style="width:${pct}%"></div></div>
    <p><b>${role.skills.length - missing.length}</b> of <b>${role.skills.length}</b> skills done.
    ${missing.length ? `<b>${hrs}h</b> left, about <b>${weeks} week${weeks > 1 ? 's' : ''}</b> at ${state.hoursPerWeek}h per week.` : ''}</p>
    ${missing.length ? '<b>Still missing:</b><div class="miss">' + missing.map(s => `<span class="tag">${s.name}</span>`).join('') + '</div>' : '<p class="win">You are ready for this role!</p>'}`;
}

function renderPlan() {
  const role = getRole();
  const weeks = buildPlan(getMissing(role, state.completedSkillIds), state.hoursPerWeek);
  if (!weeks.length) { $('plan').innerHTML = '<p class="win">Nothing left to learn. Start applying!</p>'; return; }
  $('plan').innerHTML = weeks.map((w, i) => `<div class="week"><h3><span>Week ${i + 1}</span><span>${w.hours}h</span></h3><div class="wk">` +
    w.skills.map(s => `<details data-open="${s.id}" ${openSkills.has(s.id) ? 'open' : ''}>
      <summary><span>${s.name}</span><span>${s.hours}h</span></summary>
      <div class="body">
        <h4>Where to learn</h4>
        <ul><li><a href="${s.res[1]}" target="_blank" rel="noopener">${s.res[0]}</a> (free reading)</li>
        ${s.yt ? `<li><a href="${s.yt[1]}" target="_blank" rel="noopener">YouTube (Best): ${s.yt[0]}</a> (recommended video/channel)</li>` : (role.youtube ? `<li><a href="${role.youtube[1]}" target="_blank" rel="noopener">YouTube (Best): ${role.youtube[0]}</a> (role channel/course)</li>` : '')}
        <li><a href="${ytLink(s.name)}" target="_blank" rel="noopener">YouTube: ${s.name} for beginners</a> (topic search)</li>
        ${role.github ? `<li><a href="${role.github[1]}" target="_blank" rel="noopener">GitHub: ${role.github[0]}</a> (role roadmap &amp; repo)</li>` : ''}</ul>
        <h4>How to learn</h4><p>${s.how}</p>
        <h4>Practice task</h4><p>${s.practice}</p>
        <button type="button" class="done" data-done="${s.id}">I finished this skill</button>
      </div></details>`).join('') + '</div></div>').join('');
}

function render() { renderRoles(); renderSkills(); renderScore(); renderPlan(); }

// --- events ---
$('roles').addEventListener('click', e => {
  const b = e.target.closest('[data-role]');
  if (b) update(() => { state.roleId = b.dataset.role; });
});
$('skills').addEventListener('change', e => {
  const id = e.target.dataset.skill; if (!id) return;
  update(() => {
    const list = state.completedSkillIds;
    state.completedSkillIds = e.target.checked ? [...new Set([...list, id])] : list.filter(x => x !== id);
  });
});
$('hours').addEventListener('change', e => {
  const h = Math.min(80, Math.max(1, parseInt(e.target.value, 10) || 1));
  update(() => { state.hoursPerWeek = h; });
});
$('plan').addEventListener('click', e => {
  const b = e.target.closest('[data-done]');
  if (b) update(() => { state.completedSkillIds = [...new Set([...state.completedSkillIds, b.dataset.done])]; });
});
$('plan').addEventListener('toggle', e => {
  const id = e.target.dataset && e.target.dataset.open;
  if (id) e.target.open ? openSkills.add(id) : openSkills.delete(id);
}, true);
$('reset').addEventListener('click', () => {
  if (confirm('Clear your role, skills and hours?')) { clearState(); state = Object.assign({}, DEFAULTS); openSkills.clear(); render(); }
});

$('method').innerHTML = METHOD.map(m => `<li>${m}</li>`).join('');
render();
