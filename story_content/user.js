function ExecuteScript(strId)
{
  switch (strId)
  {
      case "6EpqBzsQ6cK":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbzlI-ca6THKyIKat34o2rxpSgWEYJpX6d_wmlsuLjHKd4FTrP0HRG9djrf9jaHZaFzX/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

