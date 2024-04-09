document.querySelector('.but_ras').addEventListener('click', function(e) {
    e.preventDefault();
    
    const form = document.querySelector('#subscription-form');
    const data = {
        adres: form.querySelector('.ras_form').value
    };
    sendForm(data);
});

async function sendForm(data) {
    const res = await fetch('./mail.php', {
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(data)
    });
    
    const result = await res.json();

}