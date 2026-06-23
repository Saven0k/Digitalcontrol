// Импорт всех изображений для drillingCards
import drillingCart1 from "../assets/images/drillingCards/cart1.png";
import drillingCart2 from "../assets/images/drillingCards/cart2.png";
import drillingCart3 from "../assets/images/drillingCards/cart3.png";
import drillingCart4 from "../assets/images/drillingCards/cart4.png";
import drillingCart5 from "../assets/images/drillingCards/cart5.png";
import drillingCart6 from "../assets/images/drillingCards/cart6.png";
import drillingCart7 from "../assets/images/drillingCards/cart7.png";
import drillingCart8 from "../assets/images/drillingCards/cart8.png";
import drillingCart9 from "../assets/images/drillingCards/cart9.png";
import drillingCart10 from "../assets/images/drillingCards/cart10.png";
import drillingCart11 from "../assets/images/drillingCards/cart11.png";
import drillingCart12 from "../assets/images/drillingCards/cart12.png";
import drillingCart13 from "../assets/images/drillingCards/cart13.png";
import drillingCart14 from "../assets/images/drillingCards/cart14.png";
import drillingCart15 from "../assets/images/drillingCards/cart15.png";
import drillingCart16 from "../assets/images/drillingCards/cart16.png";
import drillingCart17 from "../assets/images/drillingCards/cart17.png";
import drillingCart18 from "../assets/images/drillingCards/cart18.png";

// Импорт всех изображений для tkrsCards
import tkrsCart1 from "../assets/images/TkrsCards/cart1.png";
import tkrsCart2 from "../assets/images/TkrsCards/cart2.png";
import tkrsCart3 from "../assets/images/TkrsCards/cart3.png";
import tkrsCart4 from "../assets/images/TkrsCards/cart4.png";
import tkrsCart5 from "../assets/images/TkrsCards/cart5.png";
import tkrsCart6 from "../assets/images/TkrsCards/cart6.png";
import tkrsCart7 from "../assets/images/TkrsCards/cart7.png";
import tkrsCart8 from "../assets/images/TkrsCards/cart8.png";
import tkrsCart9 from "../assets/images/TkrsCards/cart9.png";
import tkrsCart10 from "../assets/images/TkrsCards/cart10.png";
import tkrsCart11 from "../assets/images/TkrsCards/cart11.png";
import tkrsCart12 from "../assets/images/TkrsCards/cart12.png";
import tkrsCart13 from "../assets/images/TkrsCards/cart13.png";
import tkrsCart14 from "../assets/images/TkrsCards/cart14.png";

export interface ScenarioData {
    id: number;
    category: string;
    title: string;
    image: string;
    notlification: string;
    cause: string;
}

export const drillingData: ScenarioData[] = [
    {
        id: 1,
        category: "Бурение",
        title: "Умная камера поможет вам в работе",
        image: drillingCart1,
        notlification: "работник не использует страховочную привязь у края роторной площадки",
        cause: "Работник не использует привязь или страховочная привязь отсутствует при нахождении работника у края роторной площадки без ограждения и при открытых воротах"
    },
    {
        id: 2,
        category: "Бурение",
        title: "Новые стандарты охраны труда на производстве",
        image: drillingCart2,
        notlification: "Работник у открытого и работающего шнекового конвейера",
        cause: "Работник находится близко к работающему шнековому конвейеру"
    },
    {
        id: 3,
        category: "Бурение",
        title: "Работник не использует страховочную привязь при работе на балконе",
        image: drillingCart3,
        notlification: "Работник не использует страховочную привязь при работе на балконе",
        cause: "Трос инерционной катушки не пристёгнут к страховочной привязи или страховочная привязь отсутствует"
    },
    {
        id: 4,
        category: "Бурение",
        title: "Работник за ограждением люльки верхового",
        image: drillingCart4,
        notlification: "Работник за ограждением люльки верхового",
        cause: "Работник покидает зону балкона или ось тела переваливается через балкон"
    },
    {
        id: 5,
        category: "Бурение",
        title: "Отсутствие СИЗ органов зрения и дыхания",
        image: drillingCart5,
        notlification: "Отсутствие СИЗ органов зрения; зафиксировано отсутствие СИЗ органов дыхания",
        cause: "На работнике отсутствуют очки или респиратор при взаимодействии с химией для приготовления бурового раствора или при приготовлении бурового раствора"
    },
    {
        id: 6,
        category: "Бурение",
        title: "Обнаружен работник в опасной зоне в момент натяжения на тяговом тросе УМК ключа",
        image: drillingCart6,
        notlification: "Обнаружен работник в опасной зоне в момент натяжения на тяговом тросе УМК ключа",
        cause: "Работник находится в опасной зоне на роторной площадке в момент, когда машинные ключи надеты на колонну труб и на тяговом тросе появилось усилие"
    },
    {
        id: 7,
        category: "Бурение",
        title: "Работник без верхней спецодежды",
        image: drillingCart7,
        notlification: "Работник без верхней спецодежды",
        cause: "Работник находится без СИЗ, закрывающих оголённые участки тела, в блоке приготовления раствора"
    },
    {
        id: 8,
        category: "Бурение",
        title: "Небезопасная работа на высоте",
        image: drillingCart8,
        notlification: "Небезопасная работа на высоте",
        cause: "Трос инерционной катушки не пристёгнут к страховочной привязи при нахождении на высоте более 1,8 м от пола или привязь отсутствует при нахождении на высшей точке бурового насоса (на высоте более 1,8 м)"
    },
    {
        id: 9,
        category: "Бурение",
        title: "Работник не держится за перила на маршевой лестнице",
        image: drillingCart9,
        notlification: "Работник не держится за перила на маршевой лестнице",
        cause: "Работник не держится за перила"
    },
    {
        id: 10,
        category: "Бурение",
        title: "Обнаружен работник между движущимся ключом и колонной",
        image: drillingCart10,
        notlification: "Обнаружен работник между движущимся ключом и колонной",
        cause: "Работник находится между ключом и колонной труб"
    },
    {
        id: 11,
        category: "Бурение",
        title: "Работник в опасной зоне при спуске/подъёме труб",
        image: drillingCart11,
        notlification: "Работник в опасной зоне при спуске/подъёме труб",
        cause: "Работник находится в опасной зоне на мостках при спуске/подъёме труб"
    },
    {
        id: 12,
        category: "Бурение",
        title: "Зафиксировано отсутствие каски на персонале",
        image: drillingCart12,
        notlification: "Зафиксировано отсутствие каски на персонале",
        cause: "Работник находится без каски"
    },
    {
        id: 13,
        category: "Бурение",
        title: "Операции с трубой до остановки талевого блока",
        image: drillingCart13,
        notlification: "Операции с трубой до остановки талевого блока",
        cause: "Работник не дожидается остановки системы верхнего привода при манипуляции с бурильной трубой и элеватором"
    },
    {
        id: 14,
        category: "Бурение",
        title: "Не произведён осмотр талевого каната",
        image: drillingCart14,
        notlification: "Не произведён осмотр талевого каната",
        cause: "Не соблюдаются требования к частоте осмотра талевого каната"
    },
    {
        id: 15,
        category: "Бурение",
        title: "Обнаружен излив из трубного пространства на буровой",
        image: drillingCart15,
        notlification: "Обнаружен излив из трубного пространства на буровой",
        cause: "При отсутствии циркуляции обнаруживается излив"
    },
    {
        id: 16,
        category: "Бурение",
        title: "Работник в люке без страховочного оборудования",
        image: drillingCart16,
        notlification: "Работник в люке без страховочного оборудования",
        cause: "Работник залезает в люк без СИЗОД и/или страховочной привязи"
    },
    {
        id: 17,
        category: "Бурение",
        title: "Работник в люке без страхующего персонала",
        image: drillingCart17,
        notlification: "Работник в люке без страхующего персонала",
        cause: "Работник спускается в люк, страхующий отсутствует"
    },
    {
        id: 18,
        category: "Бурение",
        title: "Работник открыл люк и ушёл",
        image: drillingCart18,
        notlification: "Работник открыл люк и ушёл",
        cause: "Люк в ёмкостном блоке не имеет крышки или решётки, в зоне работы с люком (2 метра) нет людей"
    }
];

export const tkrsData: ScenarioData[] = [
    {
        id: 1,
        category: "ТКРС",
        title: "Человек под грузом при ПРР",
        image: tkrsCart1,
        notlification: "Человек под грузом при ПРР",
        cause: "Работник находится на близком расстоянии от переносимого груза в процессе погрузочно-разгрузочных работ"
    },
    {
        id: 2,
        category: "ТКРС",
        title: "Человек в опасной зоне при работе ротора",
        image: tkrsCart2,
        notlification: "Человек в опасной зоне при работе ротора",
        cause: "Работник находится на рабочей площадке в момент работы механического ротора"
    },
    {
        id: 3,
        category: "ТКРС",
        title: "Работник находится в опасной зоне при работе гидравлического ключа",
        image: tkrsCart3,
        notlification: "Работник находится в опасной зоне при работе гидравлического ключа",
        cause: "Работник в опасной зоне при работе гидравлического ключа"
    },
    {
        id: 4,
        category: "ТКРС",
        title: "Работа неполной вахтой при проведении спуско-подъёмных операций",
        image: tkrsCart4,
        notlification: "Работа неполной вахтой при проведении спуско-подъёмных операций",
        cause: "В процессе спуска/подъёма труб на рабочей площадке и приёмных мостках работает менее трёх сотрудников"
    },
    {
        id: 5,
        category: "ТКРС",
        title: "Работник в опасной зоне при движении ВСП или талевого блока",
        image: tkrsCart5,
        notlification: "Работник в опасной зоне при движении ВСП или талевого блока",
        cause: "Работник находится в опасной зоне на столе ротора при любом движении верхнего силового привода вверх или вниз с колонной труб"
    },
    {
        id: 6,
        category: "ТКРС",
        title: "Обнаружена несмонтированная линия долива",
        image: tkrsCart6,
        notlification: "Обнаружена несмонтированная линия долива",
        cause: "Обнаружена несмонтированная линия долива на устье скважины в зоне видимости камеры или нарушение целостности линии долива, ведущей от устья до ёмкости долива, в поле видимости камеры в процессе подъёма труб"
    },
    {
        id: 7,
        category: "ТКРС",
        title: "Работник в опасной зоне при спуске/подъёме труб",
        image: tkrsCart7,
        notlification: "Работник в опасной зоне при спуске/подъёме труб",
        cause: "Во время спуска/подъёма труб работник находится в опасной зоне возможного падения трубы на приёмных мостках"
    },
    {
        id: 8,
        category: "ТКРС",
        title: "Зафиксировано отсутствие каски на персонале",
        image: tkrsCart8,
        notlification: "Зафиксировано отсутствие каски на персонале",
        cause: "Работник находится без каски"
    },
    {
        id: 9,
        category: "ТКРС",
        title: "Небезопасная работа на высоте",
        image: tkrsCart9,
        notlification: "Небезопасная работа на высоте",
        cause: "Отсутствие в ракурсе камеры видимого корректного применения СИЗ для работы на высоте при нахождении персонала на лестнице ПА"
    },
    {
        id: 10,
        category: "ТКРС",
        title: "Обнаружена незагерметизированная скважина",
        image: tkrsCart10,
        notlification: "Обнаружена незагерметизированная скважина",
        cause: "Оставление скважины с незагерметизированным трубным и/или затрубным пространством более чем на пять минут"
    },
    {
        id: 11,
        category: "ТКРС",
        title: "Работник в опасной зоне на рабочей площадке при спуске/подъёме труб",
        image: tkrsCart11,
        notlification: "Работник в опасной зоне на рабочей площадке при спуске/подъёме труб",
        cause: "Во время спуска/подъёма труб работник находится на рабочей площадке в опасной зоне возможного падения трубы"
    },
    {
        id: 12,
        category: "ТКРС",
        title: "Зафиксировано отсутствие штанги ПВО / шпильки / штурвала задвижки",
        image: tkrsCart12,
        notlification: "Зафиксировано отсутствие штанги ПВО / шпильки / штурвала задвижки",
        cause: "Отсутствие штанги превентора / штурвала на задвижке / неполный комплект шпилек"
    },
    {
        id: 13,
        category: "ТКРС",
        title: "При СПО элеватор повёрнут зевом вниз",
        image: tkrsCart13,
        notlification: "При СПО элеватор повёрнут зевом вниз",
        cause: "Подъём трубы осуществляется элеватором с зевом вниз"
    },
    {
        id: 14,
        category: "ТКРС",
        title: "Подъём трубы при закрытом превенторе",
        image: tkrsCart14,
        notlification: "Подъём трубы при закрытом превенторе",
        cause: "Проведение спуско-подъёмных операций при закрытом или неполностью открытом превенторе"
    }
];