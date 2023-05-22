<?php if (!empty($fb)) { ?>
	<!-- Facebook Pixel Code -->
		<script> !function(f,b,e,v,n,t,s) {if(f.fbq)return;n=f.fbq=function(){n.callMethod? n.callMethod.apply(n,arguments):n.queue.push(arguments)}; if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0'; n.queue=[];t=b.createElement(e);t.async=!0; t.src=v;s=b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t,s)}(window, document,'script', 'https://connect.facebook.net/en_US/fbevents.js'); fbq('init', '<?php echo $fb; ?>'); fbq('track', 'PageView'); </script>
	<!-- End Facebook Pixel Code -->
<?php } ?>
<?php if (!empty($ga)) { ?>
	<!-- Global site tag (gtag.js) - Google Ads:  -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=<?php echo $splitGA[0]; ?>"></script>
	<script>
		window.dataLayer = window.dataLayer || [];
		function gtag(){dataLayer.push(arguments);}
		gtag('js', new Date());

		gtag('config', '<?php echo $splitGA[0]; ?>');
	</script>

	<script>
		function gtag_report_conversion(url) {
			var callback = function () {
				if (typeof(url) != 'undefined') {
					window.location = url;
				}
			};
			gtag('event', 'conversion', {
				'send_to': '<?php echo $ga; ?>',
				'event_callback': callback
			});
			return false;
		}
	</script>
<?php } ?>
