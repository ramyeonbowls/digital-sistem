<template>
    <div class="fixed left-0 right-0 start-0 top-0 z-10 h-28 bg-blue-template sm:h-25 md:bg-white-template overflow-scroll">
        <div class="flex flex-row justify-center gap-4 p-2 md:justify-between md:gap-2">
            <a class="hidden items-center md:inline-flex" href="#" aria-label="Homepage Link">
                <img src="images/logo/logo.png" alt="Logo" class="w-44 rounded-sm" />
            </a>
            <a class="inline-flex p-5 sm:p-1 items-start md:hidden" href="#" aria-label="Homepage Link">
                <img src="images/logo/logo.png" alt="Logo" class="w-44 rounded-md bg-white" />
            </a>
            <h1 class="hidden items-center text-sm font-bold text-white-template sm:inline-flex sm:text-xl sm:text-blue-template md:text-center md:text-lg lg:text-2xl"></h1>
            <div class="hidden items-center p-2 md:flex md:justify-center md:gap-2">
                <button class="btn btn-soft inline-flex items-center bg-blue-template font-semibold text-white-template hover:btn-primary">Masuk</button>
                <button class="btn btn-soft inline-flex items-center bg-blue-template font-semibold text-white-template hover:btn-info">Daftar</button>
            </div>
        </div>
    </div>
    <div class="navbar fixed top-20 z-10 rounded-none bg-transparent shadow-none sm:top-16 md:top-[4.5rem] md:bg-blue-template md:shadow-sm overflow-hidden">
        <div class="w-full md:flex md:flex-row-reverse md:items-center md:justify-between md:gap-2">
            <div class="flex items-center justify-between md:justify-end">
                <div class="navbar-start items-center justify-between gap-2 max-md:w-full">
                    <div class="relative w-full md:w-96">
                        <span class="icon-[tabler--search] absolute start-3 top-1/2 size-4 flex-shrink-0 -translate-y-1/2 text-base-content"></span>
                        <input class="input ps-8" type="text" placeholder="Search..." role="combobox" aria-expanded="false" value="" autofocus="" data-combo-box-input="" />
                    </div>
                    <div class="rounded-md bg-white md:hidden">
                        <button type="button" class="btn-md btn btn-square btn-secondary btn-outline collapse-toggle" data-collapse="#logo-navbar-collapse" aria-controls="logo-navbar-collapse" aria-label="Toggle navigation">
                            <span class="icon-[tabler--menu-2] size-6 collapse-open:hidden"></span>
                            <span class="icon-[tabler--x] hidden size-6 collapse-open:block"></span>
                        </button>
                    </div>
                </div>
            </div>
            <div id="logo-navbar-collapse" class="collapse hidden grow basis-full overflow-hidden transition-[height] duration-300 md:navbar-start max-md:w-full">
                <ul class="menu gap-2 border border-base-300 text-base md:menu-horizontal max-md:mt-2 sm:p-0 md:border-none md:bg-blue-template">
                    <li><a class="font-semibold md:text-white-template" href="#">Beranda</a></li>
                    <li><a class="font-semibold md:text-white-template" href="#">Koleksi Buku</a></li>
                    <li><a class="font-semibold md:text-white-template" href="#">Artikel</a></li>
                    <li><a class="font-semibold md:hidden" href="#">Daftar</a></li>
                    <li><a class="font-semibold md:hidden" href="#">Masuk</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="vertical-scrollbar z-0 fixed top-28 h-[calc(100vh-9rem)] w-full overflow-y-scroll sm:top-25 md:top-32 bg-white-template">
        <div id="auto-play" data-carousel='{ "loadingClasses": "opacity-0", "isAutoPlay": true, "speed": 3000 }' class="relative w-full p-5 mt-2">
            <div class="carousel h-52 sm:h-[22rem] md:h-[29rem]">
                <div class="carousel-body h-full opacity-0">
                    <div class="carousel-slide">
                        <div class="flex h-full justify-center">
                            <img src="images/banner/banner1.png" class="block w-full" alt="image" />
                        </div>
                    </div>

                    <div class="carousel-slide">
                        <div class="flex h-full justify-center">
                            <img src="images/banner/banner2.png" class="block w-full" alt="image" />
                        </div>
                    </div>

                    <div class="carousel-slide">
                        <div class="flex h-full justify-center">
                            <img src="images/banner/banner3.png" class="block w-full" alt="image" />
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" class="carousel-prev">
                <span class="flex size-9.5 items-center justify-center">
                    <span class="icon-[tabler--chevron-left] size-5 cursor-pointer rtl:rotate-180"></span>
                </span>
                <span class="sr-only">Previous</span>
            </button>

            <button type="button" class="carousel-next">
                <span class="sr-only">Next</span>
                <span class="flex size-9.5 items-center justify-center">
                    <span class="icon-[tabler--chevron-right] size-5 cursor-pointer rtl:rotate-180"></span>
                </span>
            </button>
        </div>
        <div class="col-span-1 grid h-fit w-full gap-4 p-5">
            <h1 class="items-center text-center text-3xl md:text-4xl font-semibold text-blue-template">BUKU POPULER</h1>
            <div class="flex gap-6">
                <div class="hidden lg:block h-[45rem]">
                    <img src="images/logo/BukuPopuler.jpg" class="w-full rounded-md" alt="left-banner" />
                </div>
                <div class="flex h-[45rem] flex-wrap justify-center md:justify-evenly gap-8 md:gap-4">
                    <div class="group card image-full h-72 w-44 md:h-[22rem] md:w-52 text-blue-template hover:shadow-sm sm:max-w-sm">
                        <figure><img src="images/covers/Covers (1).jpg" alt="covers" class="transition-transform duration-500 group-hover:scale-110" /></figure>
                        <div class="card-body items-center justify-center md:justify-end">
                            <h2 class="card-title mb-2.5 text-center text-white-template">Lorem ipsum dolor sit amet.</h2>
                            <p class="mb-4 text-center">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions">
                                <button class="btn btn-soft inline-flex items-center bg-blue-template font-semibold text-white-template hover:btn-primary">Baca Sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div class="group card image-full h-72 w-44 md:h-[22rem] md:w-52 text-blue-template hover:shadow-sm sm:max-w-sm">
                        <figure><img src="images/covers/Covers (2).jpg" alt="covers" class="transition-transform duration-500 group-hover:scale-110" /></figure>
                        <div class="card-body items-center justify-center md:justify-end">
                            <h2 class="card-title mb-2.5 text-center text-white-template">Lorem ipsum dolor sit amet.</h2>
                            <p class="mb-4 text-center">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions">
                                <button class="btn btn-soft inline-flex items-center bg-blue-template font-semibold text-white-template hover:btn-primary">Baca Sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div class="group card image-full h-72 w-44 md:h-[22rem] md:w-52 text-blue-template hover:shadow-sm sm:max-w-sm">
                        <figure><img src="images/covers/Covers (3).jpg" alt="covers" class="transition-transform duration-500 group-hover:scale-110" /></figure>
                        <div class="card-body items-center justify-center md:justify-end">
                            <h2 class="card-title mb-2.5 text-center text-white-template">Lorem ipsum dolor sit amet.</h2>
                            <p class="mb-4 text-center">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions">
                                <button class="btn btn-soft inline-flex items-center bg-blue-template font-semibold text-white-template hover:btn-primary">Baca Sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div class="group card image-full h-72 w-44 md:h-[22rem] md:w-52 text-blue-template hover:shadow-sm sm:max-w-sm">
                        <figure><img src="images/covers/Covers (4).jpg" alt="covers" class="transition-transform duration-500 group-hover:scale-110" /></figure>
                        <div class="card-body items-center justify-center md:justify-end">
                            <h2 class="card-title mb-2.5 text-center text-white-template">Lorem ipsum dolor sit amet.</h2>
                            <p class="mb-4 text-center">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions">
                                <button class="btn btn-soft inline-flex items-center bg-blue-template font-semibold text-white-template hover:btn-primary">Baca Sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div class="group card image-full h-72 w-44 md:h-[22rem] md:w-52 text-blue-template hover:shadow-sm sm:max-w-sm">
                        <figure><img src="images/covers/Covers (5).jpg" alt="covers" class="transition-transform duration-500 group-hover:scale-110" /></figure>
                        <div class="card-body items-center justify-center md:justify-end">
                            <h2 class="card-title mb-2.5 text-center text-white-template">Lorem ipsum dolor sit amet.</h2>
                            <p class="mb-4 text-center">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions">
                                <button class="btn btn-soft inline-flex items-center bg-blue-template font-semibold text-white-template hover:btn-primary">Baca Sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div class="group card image-full h-72 w-44 md:h-[22rem] md:w-52 text-blue-template hover:shadow-sm sm:max-w-sm">
                        <figure><img src="images/covers/Covers (6).jpg" alt="covers" class="transition-transform duration-500 group-hover:scale-110" /></figure>
                        <div class="card-body items-center justify-center md:justify-end">
                            <h2 class="card-title mb-2.5 text-center text-white-template">Lorem ipsum dolor sit amet.</h2>
                            <p class="mb-4 text-center">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions">
                                <button class="btn btn-soft inline-flex items-center bg-blue-template font-semibold text-white-template hover:btn-primary">Baca Sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div class="group card image-full h-72 w-44 md:h-[22rem] md:w-52 text-blue-template hover:shadow-sm sm:max-w-sm">
                        <figure><img src="images/covers/Covers (7).jpg" alt="covers" class="transition-transform duration-500 group-hover:scale-110" /></figure>
                        <div class="card-body items-center justify-center md:justify-end">
                            <h2 class="card-title mb-2.5 text-center text-white-template">Lorem ipsum dolor sit amet.</h2>
                            <p class="mb-4 text-center">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions">
                                <button class="btn btn-soft inline-flex items-center bg-blue-template font-semibold text-white-template hover:btn-primary">Baca Sekarang</button>
                            </div>
                        </div>
                    </div>
                    <div class="group card image-full h-72 w-44 md:h-[22rem] md:w-52 text-blue-template hover:shadow-sm sm:max-w-sm">
                        <figure><img src="images/covers/Covers (8).jpg" alt="covers" class="transition-transform duration-500 group-hover:scale-110" /></figure>
                        <div class="card-body items-center justify-center md:justify-end">
                            <h2 class="card-title mb-2.5 text-center text-white-template">Lorem ipsum dolor sit amet.</h2>
                            <p class="mb-4 text-center">Lorem ipsum dolor sit amet.</p>
                            <div class="card-actions">
                                <button class="btn btn-soft inline-flex items-center bg-blue-template font-semibold text-white-template hover:btn-primary">Baca Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { HSCollapse } from 'flyonui/flyonui'

export default {
    mounted() {
        window.addEventListener('load', function () {
            const menu = new HSCollapse(document.querySelector('#logo-navbar-collapse'))
            const showMenuBtn = document.querySelector('#logo-navbar-collapse')

            showMenuBtn.addEventListener('click', () => {
                menu.show()
            })
        })
    },
}
</script>
