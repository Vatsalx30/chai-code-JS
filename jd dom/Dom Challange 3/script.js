function updatePreview() {
    // Fetching values from input fields
    const name = document.getElementById('form-input').value || 'Not provided';
    const job = document.getElementById('form-input-job').value || 'Not provided';
    const age = document.getElementById('form-input-age').value || 'Not provided';
    const bio = document.getElementById('form-input-bio').value || 'Not provided';

    // Updating preview in real-time
    document.getElementById('previewName').textContent = name;
    document.getElementById('previewJob').textContent = job;
    document.getElementById('previewAge').textContent = age;
    document.getElementById('previewBio').textContent = bio;
} 