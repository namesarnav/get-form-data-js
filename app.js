let form = document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
    let inps = document.querySelectorAll('.input-fields');
    try {
        let arr = {
            UserInputs: []
        };
        for (i of inps) {
        // console.dir(i)
            var data = {
              key:value  
            }
            var key = `${i.placeholder}`;
            var value = `${i.value}`
            arr.UserInputs.push(data)
        }
        data = JSON.stringify(arr)
        console.log(arr)
    }
    catch(err){
        console.log(err)
    }

    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    let format = document.querySelector('#fileType').value
    if (format.toLowerCase()=='json' || format.toLowerCase()=='text') {
        download(data, `data.${format.toLowerCase()}`, 'text/plain');
    }else{
        alert('Please enter correct file format')
    }
    
    console.log('Downloaded')
});

