export function DesignProcessTable() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-0 w-[70%] md:w-[60%]  2xl:w-[900px]">
      {/* Monday Section */}
      <div className="bg-brand-primary-20 lg:row-start-1 lg:col-start-1">
        <h5 className="py-2 px-2 text-center font-bold">Monday</h5>
      </div>
      <div className="bg-brand-greys-0 lg:row-start-2 lg:col-start-1">
        <p className="py-5 px-5">
          <div className="font-bold">Frame the problem</div>
          Map out all components, modules, and views for the given week’s
          flow(s), discuss per-channel needs and concerns and opportunities to
          improve the experience and start exploration of multiple concepts.
        </p>
      </div>

      {/* Wednesday Section */}
      <div className="bg-brand-primary-20 lg:row-start-1 lg:col-start-2">
        <h5 className="py-2 px-2 text-center font-bold">Wednesday</h5>
      </div>
      <div className="bg-brand-greys-0 lg:row-start-2 lg:col-start-2">
        <p className="py-5 px-5">
          <div className="font-bold">Review solutions</div>
          Mid-week check-in Internal review of various options/solutions Keep
          everyone in sync.
        </p>
      </div>

      {/* Friday Section */}
      <div className="bg-brand-primary-20 lg:row-start-1 lg:col-start-3">
        <h5 className="py-2 px-2 text-center font-bold">Friday</h5>
      </div>
      <div className="bg-brand-greys-0 lg:row-start-2 lg:col-start-3">
        <p className="py-5 px-5">
          <div className="font-bold">Discuss with developers</div>
          Review with front-end developers.
        </p>
      </div>
    </div>
  );
}
900;
