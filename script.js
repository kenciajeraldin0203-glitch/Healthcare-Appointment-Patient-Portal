const patientForm = document.getElementById("patientForm");
const appointmentTable = document.getElementById("appointmentTable");
const healthInfo = document.getElementById("healthInfo");
const successMessage = document.getElementById("successMessage");

let appointmentNumber = 1001;

patientForm.addEventListener("submit", function(event) {
    event.preventDefault();

    // Read form values
    const name = document.getElementById("patientName").value.trim();
    const email = document.getElementById("email").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const dob = document.getElementById("dob").value;
    const gender = document.getElementById("gender").value;
    const bloodGroup = document.getElementById("bloodGroup").value;
    const department = document.getElementById("department").value;
    const doctor = document.getElementById("doctor").value;
    const appointmentDate = document.getElementById("appointmentDate").value;
    const appointmentTime = document.getElementById("appointmentTime").value;
    const address = document.getElementById("address").value.trim();
    const symptoms = document.getElementById("symptoms").value.trim();

    // HTML5 validation
    if (!patientForm.checkValidity()) {
        patientForm.reportValidity();
        return;
    }

    // Create appointment ID
    const appointmentId = "APT" + appointmentNumber++;

    // Display appointment in table
    appointmentTable.innerHTML = `
        <tr>
            <td>${appointmentId}</td>
            <td>${name}</td>
            <td>${department}</td>
            <td>${doctor}</td>
            <td>${appointmentDate}</td>
            <td>${appointmentTime}</td>
            <td><span class="badge bg-success">Confirmed</span></td>
        </tr>
    `;

    // Display health information
    healthInfo.innerHTML = `
        <div class="col-md-6 mb-3">
            <div class="info-box">
                <strong>Patient Name:</strong>
                <span>${name}</span>
            </div>
        </div>

        <div class="col-md-6 mb-3">
            <div class="info-box">
                <strong>Blood Group:</strong>
                <span>${bloodGroup}</span>
            </div>
        </div>

        <div class="col-md-6 mb-3">
            <div class="info-box">
                <strong>Department:</strong>
                <span>${department}</span>
            </div>
        </div>

        <div class="col-md-6 mb-3">
            <div class="info-box">
                <strong>Doctor:</strong>
                <span>${doctor}</span>
            </div>
        </div>

        <div class="col-md-6 mb-3">
            <div class="info-box">
                <strong>Appointment Date:</strong>
                <span>${appointmentDate}</span>
            </div>
        </div>

        <div class="col-md-6 mb-3">
            <div class="info-box">
                <strong>Appointment Time:</strong>
                <span>${appointmentTime}</span>
            </div>
        </div>

        <div class="col-md-6 mb-3">
            <div class="info-box">
                <strong>Symptoms:</strong>
                <span>${symptoms}</span>
            </div>
        </div>

        <div class="col-md-6 mb-3">
            <div class="info-box">
                <strong>Appointment Status:</strong>
                <span class="badge bg-success">Confirmed</span>
            </div>
        </div>
    `;

    // Show success message
    successMessage.classList.remove("d-none");

    // Scroll to appointment section
    document.getElementById("appointments").scrollIntoView({
        behavior: "smooth"
    });
});

// Reset form
document.getElementById("resetBtn").addEventListener("click", function() {
    successMessage.classList.add("d-none");
});
