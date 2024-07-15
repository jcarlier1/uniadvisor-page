import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div className="py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">

          {/* Top area: Blocks */}
          <div className="grid md:grid-cols-12 gap-8 lg:gap-20 mb-8 md:mb-12">

            {/* 1st block */}
            <div className="md:col-span-4 lg:col-span-5">
              <div className="mb-2">
                {/* Logo */}
                <Link href="/" className="block" aria-label="BetterBilly">
            <svg className="w-16 h-16 fill-current text-purple-600" viewBox="105.452 141.316 236 166.8" xmlns="http://www.w3.org/2000/svg">
              <path d="M 320.652 141.416 L 292.652 141.416 L 264.652 141.416 C 264.602 141.416 264.552 141.416 264.489 141.416 C 264.427 141.416 264.352 141.416 264.252 141.416 L 264.102 141.416 L 263.952 141.416 C 262.352 141.516 257.427 141.841 251.477 142.954 C 245.527 144.066 238.552 145.966 232.852 149.216 C 231.152 150.166 229.577 151.216 228.04 152.329 C 226.502 153.441 225.002 154.616 223.452 155.816 C 221.652 154.516 219.677 153.241 217.665 152.054 C 215.652 150.866 213.602 149.766 211.652 148.816 C 204.802 145.466 197.552 143.616 191.927 142.591 C 186.302 141.566 182.302 141.366 181.952 141.316 L 181.852 141.316 L 181.752 141.316 C 181.702 141.316 181.652 141.316 181.602 141.316 C 181.552 141.316 181.502 141.316 181.452 141.316 L 153.852 141.316 L 126.252 141.316 C 120.502 141.366 115.302 143.716 111.54 147.491 C 107.777 151.266 105.452 156.466 105.452 162.216 L 105.452 215.666 L 105.452 269.116 C 105.452 274.866 107.777 280.066 111.54 283.828 C 115.302 287.591 120.502 289.916 126.252 289.916 L 153.352 289.916 L 180.452 289.916 C 182.302 289.966 186.152 290.191 190.165 290.778 C 194.177 291.366 198.352 292.316 200.852 293.816 C 203.252 295.266 206.052 297.091 209.152 299.241 C 212.252 301.391 215.652 303.866 219.252 306.616 C 219.702 306.966 220.252 307.341 220.902 307.629 C 221.552 307.916 222.302 308.116 223.152 308.116 C 224.002 308.116 224.727 307.941 225.365 307.654 C 226.002 307.366 226.552 306.966 227.052 306.516 C 228.402 305.416 231.452 303.016 234.865 300.554 C 238.277 298.091 242.052 295.566 244.852 294.216 C 249.452 292.016 254.127 290.891 257.702 290.316 C 261.277 289.741 263.752 289.716 263.952 289.716 L 292.302 289.716 L 320.652 289.716 C 326.402 289.716 331.602 287.391 335.365 283.629 C 339.127 279.866 341.452 274.666 341.452 268.916 L 341.452 215.566 L 341.452 162.216 C 341.452 156.466 339.127 151.266 335.365 147.504 C 331.602 143.741 326.402 141.416 320.652 141.416 Z M 204.652 287.716 C 200.802 285.366 194.827 284.116 189.789 283.454 C 184.752 282.791 180.652 282.716 180.552 282.716 L 153.402 282.716 L 126.252 282.716 C 122.502 282.716 119.077 281.191 116.589 278.729 C 114.102 276.266 112.552 272.866 112.552 269.116 L 112.552 215.666 L 112.552 162.216 C 112.552 158.466 114.077 155.066 116.552 152.604 C 119.027 150.141 122.452 148.616 126.252 148.616 L 153.852 148.616 L 181.452 148.616 L 181.502 148.616 L 181.552 148.616 C 181.552 148.616 181.577 148.616 181.615 148.616 C 181.652 148.616 181.702 148.616 181.752 148.616 C 182.202 148.616 185.902 148.841 190.99 149.791 C 196.077 150.741 202.552 152.416 208.552 155.316 C 210.352 156.216 212.152 157.216 213.927 158.304 C 215.702 159.391 217.452 160.566 219.152 161.816 C 219.202 161.866 219.252 161.891 219.302 161.916 C 219.352 161.941 219.402 161.966 219.452 162.016 C 219.502 162.066 219.577 162.116 219.652 162.166 C 219.727 162.216 219.802 162.266 219.852 162.316 L 219.852 230.216 L 219.852 298.116 C 216.902 295.966 214.127 293.991 211.577 292.241 C 209.027 290.491 206.702 288.966 204.652 287.716 Z M 334.352 269.116 C 334.352 272.866 332.827 276.266 330.352 278.729 C 327.877 281.191 324.452 282.716 320.652 282.716 L 292.352 282.716 L 264.052 282.716 L 264.002 282.716 L 263.952 282.716 C 263.702 282.716 260.802 282.716 256.639 283.366 C 252.477 284.016 247.052 285.316 241.752 287.916 C 239.602 288.966 237.027 290.566 234.439 292.316 C 231.852 294.066 229.252 295.966 227.052 297.616 L 227.052 229.616 L 227.052 161.616 C 228.502 160.466 230.002 159.391 231.552 158.366 C 233.102 157.341 234.702 156.366 236.352 155.416 C 241.452 152.566 247.927 150.866 253.389 149.866 C 258.852 148.866 263.302 148.566 264.352 148.516 C 264.352 148.516 264.377 148.516 264.415 148.516 C 264.452 148.516 264.502 148.516 264.552 148.516 C 264.602 148.516 264.627 148.516 264.652 148.516 C 264.677 148.516 264.702 148.516 264.752 148.516 L 292.752 148.516 L 320.752 148.516 C 324.502 148.516 327.927 150.041 330.415 152.504 C 332.902 154.966 334.452 158.366 334.452 162.116 L 334.402 215.616 Z" stroke="currentColor" strokeWidth="4"/>
              <text style={{fillRule: 'evenodd', fontFamily: 'Calistoga', fontSize: '107px', paintOrder: 'fill', whiteSpace: 'pre'}} x="249.369" y="255.215">B</text>
              <text style={{fillRule: 'evenodd', fontFamily: 'Calistoga', fontSize: '107px', paintOrder: 'fill', whiteSpace: 'pre'}} x="133.959" y="255.847">B</text>
            </svg>
            </Link>
              </div>
              <div className="text-gray-400">Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</div>
            </div>

            {/* 2nd, 3rd and 4th blocks */}
            <div className="md:col-span-8 lg:col-span-7 grid sm:grid-cols-3 gap-8">

              {/* 2nd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Products</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Web Studio</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">DynamicBox Flex</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Programming Forms</Link>
                  </li>
                </ul>
              </div>

              {/* 3rd block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Resources</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Visual mockups</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Nostrud exercitation</Link>
                  </li>
                </ul>
              </div>

              {/* 4th block */}
              <div className="text-sm">
                <h6 className="text-gray-200 font-medium mb-1">Company</h6>
                <ul>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Labore et dolore</Link>
                  </li>
                  <li className="mb-1">
                    <Link href="/" className="text-gray-400 hover:text-gray-100 transition duration-150 ease-in-out">Consectetur adipiscing</Link>
                  </li>
                </ul>
              </div>

            </div>

          </div>

          {/* Bottom area */}
          <div className="md:flex md:items-center md:justify-between">

            {/* Social links */}
            <ul className="flex mb-4 md:order-1 md:ml-4 md:mb-0">
              <li>
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Twitter">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="m13.063 9 3.495 4.475L20.601 9h2.454l-5.359 5.931L24 23h-4.938l-3.866-4.893L10.771 23H8.316l5.735-6.342L8 9h5.063Zm-.74 1.347h-1.457l8.875 11.232h1.36l-8.778-11.232Z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Github">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 8.2c-4.4 0-8 3.6-8 8 0 3.5 2.3 6.5 5.5 7.6.4.1.5-.2.5-.4V22c-2.2.5-2.7-1-2.7-1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.3 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.7-3.7 3.9.3.4.6.9.6 1.6v2.2c0 .2.1.5.6.4 3.2-1.1 5.5-4.1 5.5-7.6-.1-4.4-3.7-8-8.1-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Facebook">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.023 24L14 17h-3v-3h3v-2c0-2.7 1.672-4 4.08-4 1.153 0 2.144.086 2.433.124v2.821h-1.67c-1.31 0-1.563.623-1.563 1.536V14H21l-1 3h-2.72v7h-3.257z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Instagram">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="20.145" cy="11.892" r="1" />
                    <path d="M16 20c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-6c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2z" />
                    <path d="M20 24h-8c-2.056 0-4-1.944-4-4v-8c0-2.056 1.944-4 4-4h8c2.056 0 4 1.944 4 4v8c0 2.056-1.944 4-4 4zm-8-14c-.935 0-2 1.065-2 2v8c0 .953 1.047 2 2 2h8c.935 0 2-1.065 2-2v-8c0-.935-1.065-2-2-2h-8z" />
                  </svg>
                </Link>
              </li>
              <li className="ml-4">
                <Link href="/" className="flex justify-center items-center text-purple-600 bg-gray-800 hover:text-gray-100 hover:bg-purple-600 rounded-full transition duration-150 ease-in-out" aria-label="Linkedin">
                  <svg className="w-8 h-8 fill-current" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                    <path d="M23.3 8H8.7c-.4 0-.7.3-.7.7v14.7c0 .3.3.6.7.6h14.7c.4 0 .7-.3.7-.7V8.7c-.1-.4-.4-.7-.8-.7zM12.7 21.6h-2.3V14h2.4v7.6h-.1zM11.6 13c-.8 0-1.4-.7-1.4-1.4 0-.8.6-1.4 1.4-1.4.8 0 1.4.6 1.4 1.4-.1.7-.7 1.4-1.4 1.4zm10 8.6h-2.4v-3.7c0-.9 0-2-1.2-2s-1.4 1-1.4 2v3.8h-2.4V14h2.3v1c.3-.6 1.1-1.2 2.2-1.2 2.4 0 2.8 1.6 2.8 3.6v4.2h.1z" />
                  </svg>
                </Link>
              </li>
            </ul>

            {/* Copyrights note */}
            <div className="text-gray-400 text-sm mr-4">&copy; BetterBilly. All rights reserved.</div>

          </div>

        </div>
      </div>
    </footer>
  )
}
