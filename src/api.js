export default (application) =>
  fetch('/api/applications', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(application),
  }).then(response => response.json());

