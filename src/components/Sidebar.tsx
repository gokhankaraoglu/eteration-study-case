import PanelCardLayout from "./PanelCardLayout";

function Sidebar() {
  return (
    <aside className="w-1/5 flex flex-col gap-5">
      <PanelCardLayout name="Sort By">
        <div>
          <label>
            <input type="radio" name="sort" /> Old to new
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="sort" /> New to old
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="sort" /> Price high to low
          </label>
        </div>
        <div>
          <label>
            <input type="radio" name="sort" /> Price low to high
          </label>
        </div>
      </PanelCardLayout>

      <PanelCardLayout name="Brands">
        <input type="text" placeholder="Search Brands" />
        <label>
          <input type="checkbox" /> Apple
        </label>
        <label>
          <input type="checkbox" /> Samsung
        </label>
        <label>
          <input type="checkbox" /> Huawei
        </label>
      </PanelCardLayout>

      <PanelCardLayout name="Model">
        <div>
          <input type="text" placeholder="Search Models" />
        </div>
        <div>
          <label>
            <input type="checkbox" /> iPhone 11
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> iPhone 12 Pro
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" /> iPhone 13 Pro Max
          </label>
        </div>
      </PanelCardLayout>
    </aside>
  );
}

export default Sidebar;
