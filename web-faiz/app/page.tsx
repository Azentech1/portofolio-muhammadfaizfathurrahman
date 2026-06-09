import ProjectGallery from '../components/ProjectGallery';
import { timelineData, certificatesData } from '../data/portfolioData'; // <-- Import ditambahin certificatesData
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans">
      
      {/* HERO SECTION */}
      <header className="py-20 px-6 border-b border-slate-900 flex flex-col items-center text-center">
        <div className="relative w-40 h-40 rounded-full overflow-hidden border-4 border-slate-800 mb-6">
          <Image src="/profil.jpg" alt="Muhammad Faiz" fill className="object-cover" />
        </div>
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">Muhammad Faiz Fathurrahman</h1>
        <p className="text-xl text-blue-400 font-medium mb-4">Mechatronics Student @ Politeknik Astra & Full-Stack Developer</p>
        <p className="text-slate-400 max-w-2xl leading-relaxed mb-8">
          Spesialisasi di bidang Otomasi Industri (PLC/SCADA), mikrokontroler (STM32/ESP32), desain mekanik (CAD), dan Web Development.
        </p>
        <div className="flex gap-4">
          <Link href="#projects" className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium">Lihat Portfolio</Link>
          <Link href="/CV_Muhammad_Faiz_Fathurrahman.pdf" target="_blank" className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-lg font-medium border border-slate-700">Download CV ATS</Link>
        </div>
      </header>

      {/* PORTFOLIO GALLERY (AGV, Lomba, dll) */}
      <ProjectGallery />

      {/* SECTION LISENSI & SERTIFIKAT (Baru) */}
      <section className="py-20 px-6 max-w-6xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Lisensi & Sertifikasi Profesional</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {certificatesData.map((cert) => (
            <div key={cert.id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all flex flex-col">
              <div className="relative h-40 w-full bg-slate-800">
                <Image src={cert.image} alt={cert.title} fill className="object-cover" />
              </div>
              <div className="p-4 flex-1">
                <span className="text-xs font-bold text-emerald-400 mb-1 block">{cert.org}</span>
                <h3 className="text-md font-bold text-white mb-2 leading-tight">{cert.title}</h3>
                <p className="text-slate-400 text-xs">{cert.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

     {/* TIMELINE PENGALAMAN */}
      <section className="py-20 px-6 max-w-4xl mx-auto border-t border-slate-900">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Riwayat & Pengalaman</h2>
        <div className="space-y-6">
          {timelineData.map((item) => (
            <div key={item.id} className="bg-slate-900 border border-slate-800 rounded-xl p-6 flex flex-col md:flex-row gap-6 items-start hover:border-blue-500 transition-colors">
              
              {/* Bagian Foto Pengalaman */}
              {item.image && (
                <div className="relative w-full md:w-48 h-48 md:h-32 shrink-0 rounded-lg overflow-hidden border border-slate-800">
                  <Image src={item.image} alt={item.title} fill className="object-cover" />
                </div>
              )}

              {/* Bagian Teks */}
              <div className="flex-1">
                <span className="text-sm font-bold text-blue-400 block mb-1">{item.date}</span>
                <h3 className="text-xl font-bold text-white mb-1">{item.title}</h3>
                <h4 className="text-sm font-medium text-slate-400 mb-3">{item.subtitle}</h4>
                <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
              
            </div>
          ))}
        </div>
      </section>
      
    </div>
  );
}