document.addEventListener('DOMContentLoaded', function() {
    console.log('Script loaded!');
    
    const wiggleItems = document.querySelectorAll('.wiggle-item');
    
    console.log('Found wiggle items:', wiggleItems.length);
    
    wiggleItems.forEach(item => {
        item.addEventListener('click', function() {
            console.log('Wiggle item clicked:', this.id);
            this.classList.add('wiggling');
            
            // Remove the class after animation ends
            setTimeout(() => {
                this.classList.remove('wiggling');
            }, 900); // 0.3s * 3 repeats = 900ms
        });
    });
});