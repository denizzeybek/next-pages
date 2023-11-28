export default function Home() {
  if (process.env.NEXT_PUBLIC_TEST === 'dev') {
    alert('dev')
  } else {
    alert('prod')
  }
  return (
    <>
      {/* <GoogleAnalytics trackPageViews /> */}

      <div>ana ekran {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS} </div>
    </>
  );
  }