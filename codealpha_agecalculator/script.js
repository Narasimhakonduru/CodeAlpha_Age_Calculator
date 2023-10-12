function calculateAge() {
    const dobInput = document.getElementById('dob').value;
    const dob = new Date(dobInput);
    const currentDate = new Date();

    const yearDiff = currentDate.getFullYear() - dob.getFullYear();
    const monthDiff = currentDate.getMonth() - dob.getMonth();
    const dayDiff = currentDate.getDate() - dob.getDate();

    let age = yearDiff;

    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
        age--;
    }

    const resultElement = document.getElementById('result');
    resultElement.innerText = `Your age is: ${age} years.`;
}
