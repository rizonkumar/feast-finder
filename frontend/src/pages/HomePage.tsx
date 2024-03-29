import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl font-extrabold tracking-tighter text-orange-500">
          Order for takeaway and enjoy it elsewhere today.
        </h1>
        <span className="text-xl">Delicious delights just a click away!</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="Landing-Image" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tight">
            Takeaway orders made even faster!
          </span>
          <span>
            "Experience quicker orders and personalized recommendations with the
            FeastFinder App! Download now."
          </span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
