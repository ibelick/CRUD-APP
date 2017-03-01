var update = document.getElementById('update')
var del = document.getElementById('delete')

update.addEventListener('click', function () {
  fetch('quotes', {
    method: 'put',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify({
      'name': 'lol',
      'quote': 'ZBU.'
    })
  })
  .then(response => {
    if (response.ok) return response.json()
  })
  .then(function (response) {
    window.location.reload()
  })
})

del.addEventListener('click', function () {
  fetch('quotes', {
    method: 'delete',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': 'lol'
    })
  }).then(function (response) {
    window.location.reload()
  })
})
