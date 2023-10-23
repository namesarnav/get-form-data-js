let form = document.querySelector('form')

form.addEventListener('submit',function(event){
    event.preventDefault()
    let inps = document.querySelectorAll('.input-fields');
    let arr = [];
    for (i of inps) {
        // console.dir(i)
        let data = `{${i.placeholder}:${i.value}}`;
        arr.push(data);
    }
    data = JSON.stringify(arr)

    function download(content, fileName, contentType) {
        var a = document.createElement("a");
        var file = new Blob([content], {type: contentType});
        a.href = URL.createObjectURL(file);
        a.download = fileName;
        a.click();
    }

    let format = document.querySelector('#fileType')
    if (format.value=='json' || format.value=='text') {
        download(data, `data.${format.value}`, 'text/plain');
    }else{
        alert('Please enter correct file format')
    }
    
    console.log('Downloaded')
});

