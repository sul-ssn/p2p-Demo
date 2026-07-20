const operations = [
  { id: 'VP-2841', merchant: 'Northstar', initials: 'NO', amount: '₽ 84,500', assignee: 'Alex M.', status: 'Completed', updated: '2 min ago' },
  { id: 'VP-2840', merchant: 'Monument', initials: 'MO', amount: '₽ 26,200', assignee: 'Dana K.', status: 'Processing', updated: '5 min ago' },
  { id: 'VP-2839', merchant: 'Lighthouse', initials: 'LI', amount: '₽ 112,000', assignee: 'Ilya S.', status: 'Review', updated: '9 min ago' },
  { id: 'VP-2838', merchant: 'Orbit Labs', initials: 'OR', amount: '₽ 48,750', assignee: 'Mira T.', status: 'Completed', updated: '14 min ago' },
  { id: 'VP-2837', merchant: 'Evergreen', initials: 'EV', amount: '₽ 67,100', assignee: 'Alex M.', status: 'Completed', updated: '21 min ago' }
];

const rows = document.querySelector('#rows');
const empty = document.querySelector('#empty');
const search = document.querySelector('#search');
const status = document.querySelector('#status');

function render() {
  const term = search.value.trim().toLowerCase();
  const filtered = operations.filter((item) => {
    const matchesText = Object.values(item).some((value) => value.toLowerCase().includes(term));
    return matchesText && (status.value === 'all' || item.status === status.value);
  });
  rows.innerHTML = filtered.map((item) => `<tr>
    <td><strong>${item.id}</strong></td>
    <td><span class="merchant"><i>${item.initials}</i>${item.merchant}</span></td>
    <td class="amount">${item.amount}</td><td>${item.assignee}</td>
    <td><span class="badge ${item.status.toLowerCase()}">${item.status}</span></td>
    <td>${item.updated}</td>
  </tr>`).join('');
  empty.hidden = filtered.length > 0;
}

search.addEventListener('input', render);
status.addEventListener('change', render);
render();

const sidebar = document.querySelector('.sidebar');
const scrim = document.querySelector('.scrim');
document.querySelector('.menu-button').addEventListener('click', () => {
  sidebar.classList.add('open'); scrim.classList.add('open');
});
scrim.addEventListener('click', closeMenu);
document.querySelectorAll('.nav-link').forEach((link) => link.addEventListener('click', () => {
  document.querySelectorAll('.nav-link').forEach((item) => item.classList.remove('active'));
  link.classList.add('active'); closeMenu();
}));
function closeMenu() { sidebar.classList.remove('open'); scrim.classList.remove('open'); }

const savedTheme = localStorage.getItem('showcase-theme');
if (savedTheme === 'dark') document.body.classList.add('dark');
document.querySelector('#theme').addEventListener('click', () => {
  document.body.classList.toggle('dark');
  localStorage.setItem('showcase-theme', document.body.classList.contains('dark') ? 'dark' : 'light');
});
