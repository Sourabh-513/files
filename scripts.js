function openPDF(pdf) {
    window.open(pdf, '_blank');
}

// Add a subtle hover effect
document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('mouseover', () => {
        book.style.transform = 'scale(1.05) translateY(-10px) rotate(-3deg)';
    });
    book.addEventListener('mouseout', () => {
        book.style.transform = '';
    });
});
