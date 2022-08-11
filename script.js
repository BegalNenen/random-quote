$.getJSON('data.json', function(data) {
	let dataQuotes = data.quotes;
	let randomNumber = Math.floor(Math.random() * dataQuotes.length);
	let randomQuotes = dataQuotes[randomNumber]
	var hasil = `<blockquote class="blockquote">
  <p class="pb-3">
    <i class="fas fa-quote-left fa-xs text-primary"></i>
    <span class="lead font-italic hasil"></span>` + randomQuotes.quote + ` <i class="fas fa-quote-right fa-xs text-primary"></i>
  </p>
</blockquote>
<figcaption class="blockquote-footer mb-0">` + randomQuotes.author + `</figcaption>`;
	$(".hasil").html(hasil);
});
