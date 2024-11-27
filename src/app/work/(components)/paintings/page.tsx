import Image from "next/image";

const gallerlyList = [
  {
    id: 1,
    link: "https://drive.google.com/file/d/1hywc-0pLdpLEL_-jAanUPUPC99BYbrMB/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1hywc-0pLdpLEL_-jAanUPUPC99BYbrMB",
  },
  {
    id: 2,
    link: "https://drive.google.com/file/d/1i1v8_4hrPDk0DpqDciks8SDICKWJ-b1X/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1i1v8_4hrPDk0DpqDciks8SDICKWJ-b1X",
  },
  {
    id: 3,
    link: "https://drive.google.com/file/d/1i3EFOnTUfbPF453Mvwm_WhcX5WIbHuZH/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1i3EFOnTUfbPF453Mvwm_WhcX5WIbHuZH",
  },
  {
    id: 4,
    link: "https://drive.google.com/file/d/1hy-QEeWc0VcC71Kh2psfU9CBTPTs6O0m/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1hy-QEeWc0VcC71Kh2psfU9CBTPTs6O0m",
  },
  {
    id: 5,
    link: "https://drive.google.com/file/d/1i8olBF4n88kOlGJzJDlCMs0VX-6r46ul/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1immvfGc4EMHZGBTO57ru9ig3nVZnIftn",
  },
  {
    id: 6,
    link: "https://drive.google.com/file/d/1hYL6BBwMhQilWTSVhJYOTvmPk7RM941x/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1hYL6BBwMhQilWTSVhJYOTvmPk7RM941x",
  },
  {
    id: 7,
    link: "https://drive.google.com/file/d/1hWXjEq0HdIn-7sINKVRWW8gaNL4sYpZg/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1hWXjEq0HdIn-7sINKVRWW8gaNL4sYpZg",
  },
  {
    id: 8,
    link: "https://drive.google.com/file/d/1hr0kJ5A0idjM9If4kUXRqN-3c-GpwCQG/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1hr0kJ5A0idjM9If4kUXRqN-3c-GpwCQG",
  },
  {
    id: 9,
    link: "https://drive.google.com/file/d/1hrIwGhtYUWiItzDVgiXrc53iCJK7unFZ/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1hrIwGhtYUWiItzDVgiXrc53iCJK7unFZ",
  },
  {
    id: 10,
    link: "https://drive.google.com/file/d/1hm_ma32hY5u6de_bvbQEhQO-CJn_oK6a/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1hm_ma32hY5u6de_bvbQEhQO-CJn_oK6a",
  },
  {
    id: 11,
    link: "https://drive.google.com/file/d/1i0oZubm2PSel0oKK7L4TeOjGsh_cA-mX/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1i0oZubm2PSel0oKK7L4TeOjGsh_cA-mX",
  },
  {
    id: 12,
    link: "https://drive.google.com/file/d/1i02lnHij4rcc9LQ02uAQDwDzacnlqndb/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1i02lnHij4rcc9LQ02uAQDwDzacnlqndb",
  },
  {
    id: 13,
    link: "https://drive.google.com/file/d/1hPRiVka_CBjAt8E8S7251PsQRsgxUT3z/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1hPRiVka_CBjAt8E8S7251PsQRsgxUT3z",
  },
  {
    id: 14,
    link: "https://drive.google.com/file/d/1hkc_LJapHCxRrLxewIMM5cB0NR3Qd-HC/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1hkc_LJapHCxRrLxewIMM5cB0NR3Qd-HC",
  },
  {
    id: 15,
    link: "https://drive.google.com/file/d/1hg40Ck4TAW9YpeGGonbYgQtMa50DzADw/view",
    fileId:
      "https://drive.google.com/uc?export=view&id=1hg40Ck4TAW9YpeGGonbYgQtMa50DzADw",
  },
];

export default function Page() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 gap-4 lg:gap-6 xl:gap-10 sm:grid-cols-2 lg:grid-cols-3 py-10">
        {gallerlyList.map(({ fileId, id }) => (
          <div key={id}>
            <Image
              className="h-80 w-full max-w-full rounded-lg object-cover object-center"
              src={fileId}
              alt={`gallery-photo-${id}`}
              width={320}
              height={320}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
