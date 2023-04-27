const form = document.querySelector("#waiting-list-form");

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const email = document.querySelector("#email").value;

  const data = {
    email: email,
  };

  try {
    const response = await fetch("https://api.mailerlite.com/api/v2/groups/86214781668689266/subscribers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-MailerLite-ApiKey": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI0IiwianRpIjoiZTk1YTc3NjUxOTM3N2UwY2YzZjgwYTQ2OGM2MTM2N2QwZjljNTdmODk3OTYwZjcyNWFiNmY0MDRjMjQ0NzYyMGM4ZDY0OWIzMGYyODY5MTgiLCJpYXQiOjE2ODIyMjAxOTIuNjI1OTMyLCJuYmYiOjE2ODIyMjAxOTIuNjI1OTQsImV4cCI6NDgzNzg5Mzc5Mi42MTkwNjksInN1YiI6IjQ0MDk2NiIsInNjb3BlcyI6W119.eMNtQvIahQq8b4DvQO_rgxodo6Ioone10oA_UubaCnvwVFZo4dZ96H_N9hC1jiIZprX7pUQG56L_yzLnrF4Fj1n66XKvYBCSJJdUdRAq5boXON5972IxPXamikc7PKxb8LrFd7dRLRTuHOzEnh5tCsx2lx3B4B60Orc8i5-24qfOp8tYCbIymzlLdgbuhylDTiszsfq2gz4_WiY4rT1qmu6aH4kEgoWzbKVrGnEMpZQ_AROMjT6eraGpoDQoPPT2T0Qkpa3Zl8JyECQjHwK1smy0LO5KI1K99rhHTH-mrzatjKiSICgtfgUT6msxzVn7HP4IrxQUmWfr8s0oPnGrSiCwkdBGkviGNPh4-rZaMm7PlwscJvK-vqlyr5RsvLMLM3xW-84AktHbu4Fx2JyUZMFSW44tHUSLF1deJCyOvpuwS4S5OpRShMUwaq2Gvf02VtpPsdByzfzJOHdH5ZspG7XV5rASxl6B1hmaB1_CeQnkpx5fPBB6hR5Lxhgq7EsPk6HAhaD5W2y8Kvmt9xy37SSkv0piPByHfeMLrDTcclF0Aq5D5Sq2GI209E1cCM8q1feGn-KljlgLyl4Cu3NlZfBShBUgdVTG6Bv2kv4MLNL4FzapJ2OnBnH9A82HEwfMLhpOGPwqazkgvotwiPOx-g2tBgxTQU893kpV-XcUh5k",
      },
      body: JSON.stringify(data),
    });

    if (response.status === 201) {
      // successful subscription
      alert("Thank you for joining our Waitlist!");
      form.reset();
    } else {
      // handle errors
      alert("Oops! Something went wrong. Please try again later.");
    }
  } catch (error) {
    console.error(error);
  }
});
