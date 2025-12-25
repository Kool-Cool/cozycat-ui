"use client";

export default function Page() {
  return (
    <main className="min-h-screen p-6 space-y-12 bg-base-100 text-base-content">
      {/* Header */}
      <section className="text-center space-y-2">
        <h1 className="text-4xl font-bold">
          COZY UI Libraby
        </h1>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <div className="flex flex-wrap gap-3">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-outline">Outline</button>
          <button className="btn btn-ghost">Ghost</button>
          <button className="btn btn-link">Link</button>
        </div>
      </section>

      {/* Badges */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Badges</h2>
        <div className="flex gap-3 flex-wrap">
          <span className="badge">Default</span>
          <span className="badge badge-primary">Primary</span>
          <span className="badge badge-secondary">Secondary</span>
          <span className="badge badge-success">Success</span>
          <span className="badge badge-warning">Warning</span>
          <span className="badge badge-error">Error</span>
        </div>
      </section>

      {/* Alerts */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Alerts</h2>
        <div className="space-y-2 max-w-lg">
          <div className="alert alert-info">Info alert</div>
          <div className="alert alert-success">Success alert</div>
          <div className="alert alert-warning">Warning alert</div>
          <div className="alert alert-error">Error alert</div>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="card bg-base-200 shadow">
            <div className="card-body">
              <h3 className="card-title">Cute Card 🐱</h3>
              <p>Cards adapt automatically to the theme.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Action</button>
              </div>
            </div>
          </div>

          <div className="card bg-base-200 shadow">
            <figure className="px-6 pt-6">
              <div className="h-24 w-full rounded bg-base-300" />
            </figure>
            <div className="card-body">
              <h3 className="card-title">Image Card</h3>
              <p>Placeholder image area</p>
            </div>
          </div>
        </div>
      </section>

      {/* Accordion */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Accordion</h2>
        <div className="space-y-2 max-w-xl">
          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="accordion" defaultChecked />
            <div className="collapse-title font-medium">
              What is DaisyUI?
            </div>
            <div className="collapse-content">
              <p>Component library built on Tailwind CSS.</p>
            </div>
          </div>

          <div className="collapse collapse-arrow bg-base-200">
            <input type="radio" name="accordion" />
            <div className="collapse-title font-medium">
              Why themes?
            </div>
            <div className="collapse-content">
              <p>Instant visual changes without rewriting components.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Forms */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Elements</h2>
        <div className="grid gap-4 max-w-md">
          <input
            className="input input-bordered"
            placeholder="Text input"
          />

          <select className="select select-bordered" defaultValue="">
            <option value="" disabled>
              Select option
            </option>
            <option>Option 1</option>
            <option>Option 2</option>
          </select>

          <textarea
            className="textarea textarea-bordered"
            placeholder="Textarea"
          />

          <label className="label cursor-pointer gap-3">
            <span className="label-text">Toggle</span>
            <input type="checkbox" className="toggle toggle-primary" />
          </label>

          <label className="label cursor-pointer gap-3">
            <span className="label-text">Checkbox</span>
            <input type="checkbox" className="checkbox checkbox-primary" />
          </label>

          <label className="label cursor-pointer gap-3">
            <span className="label-text">Radio</span>
            <input type="radio" className="radio radio-primary" />
          </label>
        </div>
      </section>

      {/* Slider */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Slider</h2>
        <input
          type="range"
          min={0}
          max={100}
          className="range range-primary max-w-md"
        />
      </section>

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tabs</h2>
        <div role="tablist" className="tabs tabs-boxed">
          <a role="tab" className="tab tab-active">Tab 1</a>
          <a role="tab" className="tab">Tab 2</a>
          <a role="tab" className="tab">Tab 3</a>
        </div>
      </section>

      {/* Stats */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Stats</h2>
        <div className="stats shadow">
          <div className="stat">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
          </div>
          <div className="stat">
            <div className="stat-title">Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 12%</div>
          </div>
        </div>
      </section>

      {/* Table */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Table</h2>
        <div className="overflow-x-auto max-w-xl">
          <table className="table table-zebra">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>1</th>
                <td>Mochi</td>
                <td><span className="badge badge-success">Active</span></td>
              </tr>
              <tr>
                <th>2</th>
                <td>Latte</td>
                <td><span className="badge badge-warning">Idle</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Modal */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Modal</h2>

        <button
          className="btn btn-primary"
          onClick={() =>
            (document.getElementById("demo-modal") as HTMLDialogElement)?.showModal()
          }
        >
          Open Modal
        </button>

        <dialog id="demo-modal" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello 🐾</h3>
            <p className="py-4">This modal follows the active theme.</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
      </section>

      {/* Footer */}
      <footer className="text-center opacity-60 pt-10">
        Made with 💖 using Tailwind & DaisyUI
      </footer>
    </main>
  );
}
