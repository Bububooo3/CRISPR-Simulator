document.addEventListener("DOMContentLoaded", function (){
    const cas9_img = document.getElementById("cas9-image")
    const guideRNA_img = document.getElementById("guide-rna-image")

    cas9_img.addEventListener('dragstart', function (Event){
        Event.dataTransfer.setData('text/plain', 'cas9')
    })

    guideRNA_img.addEventListener('dragover', function (Event) {
        Event.preventDefault()
        guideRNA_img.classList.add('drag-over')
    })

    guideRNA_img.addEventListener('dragleave', function (){
        guideRNA_img.classList.remove('drag-over')
    })

    guideRNA_img.addEventListener('drop', function (Event) {
        Event.preventDefault()
        guideRNA_img.classList.remove('drag-over')
        
        const dragged_item = Event.dataTransfer.getData('text/plain')

        if (dragged_item == 'cas9') {
            cas9_img.style.position = 'relative'
            cas9_img.style.top = '-30px'

            cas9_img.classList.add('bonded')
            guideRNA_img.classList.add('bonded')
        }
    })
})