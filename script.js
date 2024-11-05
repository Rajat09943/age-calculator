function calculateAge() {
    const dob = document.getElementById('dob').value;
    
    if (!dob) {
        document.getElementById('result').textContent = 'Please enter a valid date of birth!';
        return;
    }

    const dobDate = new Date(dob);
    const today = new Date();

    let age = today.getFullYear() - dobDate.getFullYear();
    const monthDifference = today.getMonth() - dobDate.getMonth();
    const dayDifference = today.getDate() - dobDate.getDate();

    // Adjust if birthday hasn't occurred this year yet
    if (monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
}
