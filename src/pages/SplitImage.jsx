export default function SplitImage() {
  return (
    <div className="relative bg-white">
      <div className="mx-auto max-w-7xl lg:flex lg:justify-between lg:px-8 xl:justify-end">
        <div className="lg:flex lg:w-1/2 lg:shrink lg:grow-0 xl:absolute xl:inset-y-0 xl:right-1/2 xl:w-1/2">
          <div className="relative h-80 lg:-ml-8 lg:h-auto lg:w-full lg:grow xl:ml-0">
            <img
              className="absolute inset-0 h-full w-full bg-gray-50 object-cover"
              src="src/assets/khairul-ummah-building.png"
              alt=""
            />
          </div>
        </div>
        <div className="px-6 lg:contents">
          <div className="mx-auto max-w-2xl pb-24 pt-16 sm:pb-32 sm:pt-20 lg:ml-8 lg:mr-0 lg:w-full lg:max-w-lg lg:flex-none lg:pt-32 xl:w-1/2">
            <h1 className="mt-2 text-3xl font-medium tracking-normal text-dark-green sm:text-4xl">
              Khairul Ummah – educating children{" "}
              <span className="font-light italic">responsibly</span>
            </h1>
            <p className="mt-6 text-xl leading-8 text-gray-700">
              Creating an Islamic environment where children can learn their
              duties toward their Lord and the community at large is vital in
              establishing healthy societies. Khairul Ummah is dedicated to
              providing this environment to children everywhere.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
