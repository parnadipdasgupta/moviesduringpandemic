function greet()
{
    let name = document.querySelector('#name').value;

    if (name === 'KuchuPu')
    {
        document.querySelector('#aboutus').innerHTML = 'Hello, my dearest girlfriend, I have really enjoyed watching these movies with you. Many more to come. This page will help you remember and relive those beautiful moments together. Love Love. ❤❤❤'
    }
    else
    {
        if (name === '')
        {
            name = 'dear';
        }

        document.querySelector('#aboutus').innerHTML = 'Hello, ' + name + '! We are happy that you want to know our online movie journey. So, me and my girlfriend, we wanted to watch movies together in the middle of this pandemic. Our process was very simple. We watched the movies on laptop while we were connected through a whatsapp video call; our calls were muted mostly except the time when we wanted to discuss something in the middle. It was not tough, we just had to watch together and wait for each other when needed and that is it.';
    }
}