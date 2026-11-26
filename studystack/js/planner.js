// planner.js - gap analysis and weekly plan (pure functions, no DOM)

function getMissing(role, completedIds) {
  return role.skills.filter(s => !completedIds.includes(s.id));
}

function getReadiness(role, completedIds) {
  const done = role.skills.filter(s => completedIds.includes(s.id)).length;
  return Math.round((done / role.skills.length) * 100);
}

// Add skills one by one; if the next skill would exceed the weekly hours, start a new week.
// A skill longer than one week gets a week of its own.
function buildPlan(missing, hoursPerWeek) {
  const weeks = [];
  let current = { skills: [], hours: 0 };
  missing.forEach(skill => {
    if (current.skills.length && current.hours + skill.hours > hoursPerWeek) {
      weeks.push(current);
      current = { skills: [], hours: 0 };
    }
    current.skills.push(skill);
    current.hours += skill.hours;
  });
  if (current.skills.length) weeks.push(current);
  return weeks;
}

if (typeof module !== 'undefined') module.exports = { getMissing, getReadiness, buildPlan };
