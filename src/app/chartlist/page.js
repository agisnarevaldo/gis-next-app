import Form from '../components/Form';
import './chartlist.css'

export default function Page() {
  return (
    <div className="app bg-yellow-700 h-screen w-3/4 m-auto text-center text-black">
      <Header />
      <Form />
      <div className="list bg-[url('/img/paper-bg.jpg')] bg-repeat-y overflow-y-scroll flex flex-col gap-14 justify-between items-center">
        <ul>
          <li>
            <input type="checkbox" checked="true" />
            <span>1 Kopi</span>
            <button>&times;</button>
          </li>
          <li>
            <input type="checkbox" />
            <span>5 Gula Pasir</span>
            <button>&times;</button>
          </li>
          <li>
            <input type="checkbox" />
            <span>3 Air Mineral</span>
            <button>&times;</button>
          </li>
        </ul>
      </div>
      <div className="actions">
        <select>
          <option value="input">Urutkan berdasarkan urutan input</option>
          <option value="name">Urutkan berdasarkan nama barang</option>
          <option value="checked">Urutkan berdasarkan ceklis</option>
        </select>
        <button>Bersihkan Daftar</button>
      </div>
      <footer className="stats">
        Ada 10 barang di daftar belanjaan, 5 barang sudah dibeli (50%)
      </footer>
    </div>
  );
}

function Header() {
  return <h1>Catatan Belanjaku 📝</h1>
}
