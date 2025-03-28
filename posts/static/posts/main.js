console.log('hello world')
const helloWorldBox = document.getElementById('hello-world')

helloWorldBox.innerHTML = 'hello <b> world'

$.ajax({
    type: 'GET',
    url: '/hello-worldd/',
    sucess: function(response){
        console.log('success', response.text);
        
    },
    error: function(error){
        console.log('error', error);
    }
})