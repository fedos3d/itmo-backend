import { Query, Param, Render, Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
    constructor(private readonly appService: AppService) {}

    @Get()
    @Render('index')
    root(@Query('login') login: string) {
	console.log(login);
	if (login === 'false' || typeof login == 'undefined') {
        return { title: "Аникеев Федор Николаевич", p1: "    <div id=\"upper_part\">\n" +
                "    <article class=\"tv\">\n" +
                "\n" +
                "        <h2>О себе:</h2>\n" +
                "        <p>\n" +
                "            Студент ИТМО, житель Петербурга. В интернетах известен как <strong>fedos3d</strong>.\n" +
                "        </p>\n" +
                "    </article>\n" +
                "    <section>\n" +
                "        <h3>Что-то вроде успехов:</h3>\n" +
                "        <ul>\n" +
                "            <li><b>Призер олимпиады Я-Профи (Робототехника)</b></li>\n" +
                "            <li><b>Не отчислен из ИТМО (пока)</b></li>\n" +
                "            <li><b>Немного говорю по английски</b></li>\n" +
                "        </ul>\n" +
                "    </section>\n" +
                "    <section>\n" +
                "        <h3>Какие-то рандомные факты:</h3>\n" +
                "            <ol>\n" +
                "            <li>Возраст: 21 год</li>\n" +
                "        <li><ins>Студент ИСа</ins></li>\n" +
                "            </ol>\n" +
                "    </section>\n" +
                "    <section>\n" +
                "        <h3>Пример кода:</h3>\n" +
                "        <p>\n" +
                "            <code>Scanner Scanner = new Scanner(System.in);</code></p>\n" +
                "    </section>\n" +
                "    </div>\n" +
                "    <div id=\"middle_part\">\n" +
                "        <section id=\"next_aside\">\n" +
                "            <h3>ASCII <span id=\"mypic\">Art</span> goes <del>brr</del> here: </h3>\n" +
                "            <pre>\n" +
                "                     .--------------.\n" +
                "                .---'  o        .    `---.\n" +
                "             .-'    .    O  .         .   `-.\n" +
                "          .-'     @@@@@@       .             `-.\n" +
                "        .'@@   @@@@@@@@@@@       @@@@@@@   .    `.\n" +
                "      .'@@@  @@@@@@@@@@@@@@     @@@@@@@@@         `.\n" +
                "     /@@@  o @@@@@@@@@@@@@@     @@@@@@@@@     O     \\\n" +
                "    /        @@@@@@@@@@@@@@  @   @@@@@@@@@ @@     .  \\\n" +
                "   /@  o      @@@@@@@@@@@   .  @@  @@@@@@@@@@@     @@ \\\n" +
                "  /@@@      .   @@@@@@ o       @  @@@@@@@@@@@@@ o @@@@ \\\n" +
                " /@@@@@                  @ .      @@@@@@@@@@@@@@  @@@@@ \\\n" +
                " |@@@@@    O    `.-./  .        .  @@@@@@@@@@@@@   @@@  |\n" +
                "/ @@@@@        --`-'       o        @@@@@@@@@@@ @@@    . \\\n" +
                "|@ @@@@ .  @  @    `    @            @@      . @@@@@@    |\n" +
                "|   @@                         o    @@   .     @@@@@@    |\n" +
                "|  .     @   @ @       o              @@   o   @@@@@@.   |\n" +
                "\\     @    @       @       .-.       @@@@       @@@      /\n" +
                " |  @    @  @              `-'     . @@@@     .    .    |\n" +
                " \\ .  o       @  @@@@  .              @@  .           . /\n" +
                "  \\      @@@    @@@@@@       .                   o     /\n" +
                "   \\    @@@@@   @@\\@@    /        O          .        /\n" +
                "    \\ o  @@@       \\ \\  /  __        .   .     .--.  /\n" +
                "     \\      .     . \\.-.---                   `--'  /\n" +
                "      `.             `-'      .                   .'\n" +
                "        `.    o     / | `           O     .     .'\n" +
                "          `-.      /  |        o             .-'\n" +
                "             `-.          .         .     .-'\n" +
                "                `---.        .       .---'\n" +
                "                     `--------------'\n" +
                "        </pre>\n" +
                "        </section>\n" +
                "    <aside>\n" +
                "        <blockquote>\n" +
                "                <p>\n" +
                "                    Кодить нужно хорошо, а кодить не хорошо - не нужно.\n" +
                "                </p>\n" +
                "                <cite>&mdash;Какая-то цитата</cite>\n" +
                "        </blockquote>\n" +
                "    </aside>\n" +
                "    </div>\n" +
                "    <section>\n" +
                "        <h3 align=\"center\">Table for lab3 goes REEEEEEEEEEEEEEEEEEE:</h3>\n" +
                "    </section>\n" +
                "    <div id=\"table\">\n" +
                "        <section class=\"row1 column1\">\n" +
                "        <h3>In Millions of USD(except for per share items)</h3>\n" +
                "        </section>\n" +
                "        <section class=\"row2 column1\">\n" +
                "            <h3>Revenue</h3>\n" +
                "        </section>\n" +
                "        <section class=\"row3 column1\">\n" +
                "            <h3>Other revenue, Total</h3>\n" +
                "        </section>\n" +
                "        <section class=\"row4 column1\">\n" +
                "            <h3>Total Revenue</h3>\n" +
                "        </section>\n" +
                "            <section class=\"row5 column1\">\n" +
                "                <h3>Cost of Revenue, Total</h3>\n" +
                "            </section>\n" +
                "            <section class=\"row1 column2\">\n" +
                "                <h3>\n" +
                "                    52 weeks ending 2012-09-29\n" +
                "                </h3>\n" +
                "            </section>\n" +
                "            <section class=\"row1 column3\">\n" +
                "                <h3>\n" +
                "                    52 weeks ending 2011-09-24\n" +
                "                </h3>\n" +
                "            </section>\n" +
                "            <section class=\"row1 column4\">\n" +
                "                <h3>\n" +
                "                    52 weeks ending 2010-09-25\n" +
                "                </h3>\n" +
                "            </section>\n" +
                "            <section class=\"row1 column5\">\n" +
                "                <h3>\n" +
                "                    52 weeks ending 2009-09-26\n" +
                "                </h3>\n" +
                "            </section>\n" +
                "        <section class=\"row2 column2\"><p>156,588 00</p></section>\n" +
                "        <section class=\"row2 column3\"><p>108,204 00</p></section>\n" +
                "        <section class=\"row2 column4\"><p>65,255 00</p></section>\n" +
                "        <section class=\"row2 column5\"><p>42,905 00</p></section>\n" +
                "            <section class=\"row3 column2\"><p>-</p></section>\n" +
                "            <section class=\"row3 column3\"><p>-</p></section>\n" +
                "            <section class=\"row3 column4\"><p>-</p></section>\n" +
                "            <section class=\"row3 column5\"><p>-</p></section>\n" +
                "            <section class=\"row4 column2\"><p>156,508 00</p></section>\n" +
                "            <section class=\"row4 column3\"><p>108,249 00</p></section>\n" +
                "            <section class=\"row4 column4\"><p>65,225 00</p></section>\n" +
                "            <section class=\"row4 column5\"><p>42,905 00</p></section>\n" +
                "            <section class=\"row5 column2\"><p>87,864 00</p></section>\n" +
                "            <section class=\"row5 column3\"><p>64,431 00</p></section>\n" +
                "            <section class=\"row5 column4\"><p>39,541 00</p></section>\n" +
                "            <section class=\"row5 column5\"><p>25,683 00</p></section>\n" +
                "    </div>"};
    } else {
	return {title: "You are logged in!", p1: "Logged in success"};
    }
    }
}
@Controller('my_portfolio')
export class AnotherController {
    @Get()
    @Render('index')
    get() {
      return { title: "Мое портфолио", p1: "<main>\n" +
                "    <section id=\"gallery\">\n" +
                "        <img src=\"images/memes/img.png\">\n" +
                "        <img src=\"images/memes/img_1.png\">\n" +
                "        <img src=\"images/memes/img_2.png\">\n" +
                "        <img src=\"images/memes/img_3.png\">\n" +
                "        <img src=\"images/memes/img_4.png\">\n" +
                "    </section>\n" +
                "</main>"};
}
}

@Controller('my_achievements')
export class MyAchievementsController {
    @Get()
    @Render('index')
    get() {
      return { title: "Мои достижения", p1: ""};
      }
}

@Controller('constructor')
export class ConstructorController {
     @Get()
     @Render('index')
     get() {
	     return { title: "Конструктор", p1: "<main>\n" +
                "<!--    Reference for this form is: https://codepen.io/stack-findover/pen/OJRvPQv-->\n" +
                "    <form class=\"input_form\" onsubmit=\"formsubmit();return false\">\n" +
                "        <div id=\"dayamount\">\n" +
                "            <label>\n" +
                "                Кол-во дней: <input type=\"number\" id=\"amount_of_days\" min=1 max=6 value=\"1\">\n" +
                "            </label>\n" +
                "        </div>\n" +
                "        <div id=\"columns_to_show\">\n" +
                "            <label>\n" +
                "                <input name=\"column\" type=\"checkbox\" value=\"time\">Время занятий\n" +
                "            </label>\n" +
                "            <label>\n" +
                "                <input name=\"column\" type=\"checkbox\" value=\"week\">Неделя\n" +
                "            </label>\n" +
                "            <label>\n" +
                "                <input name=\"column\" type=\"checkbox\" value=\"classroom\" >Аудитория\n" +
                "            </label>\n" +
                "            <input type=\"checkbox\" name=\"column\" style=\"opacity:0\" checked=\"checked\" value=\"name\">\n" +
                "            <label>\n" +
                "                    <input name=\"column\" type=\"checkbox\" value=\"lessontype\" >Вид занятий\n" +
                "            </label>\n" +
                "            <label>\n" +
                "                <input name=\"column\" type=\"checkbox\" value=\"format\">Формат занятий\n" +
                "            </label>\n" +
                "            <label>\n" +
                "                <input name=\"column\" type=\"checkbox\" value=\"tutor\" >Преподаватель\n" +
                "            </label>\n" +
                "            <label>\n" +
                "                <input name=\"column\" type=\"checkbox\" value=\"group\" >Группа\n" +
                "            </label>\n" +
                "        </div>\n" +
                "        <input type=\"submit\" name=\"submit\" value=\"Draw\">\n" +
                "    </form>\n" +
                "    <div id=\"results\" style=\"overflow-x:auto;\"></div>\n" +
                "\n" +
                "</main>", AdditionalHead: "<link href=\"constructor.css\" rel=\"stylesheet\">", AdditionalFooter: "<script src=\"scripts/constructor.js\"></script>"};
     }
}

@Controller('fetch')
export class FetchController {
    @Get()
    @Render('index')
    get() {
	    return { title: "Fetch API",  p1: "<main>\n" +
                "  <template><div class=\"loader\">\n" +
                "    <span>L</span>\n" +
                "    <span>O</span>\n" +
                "    <span>A</span>\n" +
                "    <span>D</span>\n" +
                "    <span>I</span>\n" +
                "    <span>N</span>\n" +
                "    <span>G</span>\n" +
                "  </div></template>\n" +
                "<!--  <div class=\"comment mt-4 text-justify float-left\"> <img src=\"https://i.imgur.com/yTFUilP.jpg\" alt=\"\" class=\"rounded-circle\" width=\"40\" height=\"40\">-->\n" +
                "<!--    <h4>Jhon Doe</h4> <span>- 20 October, 2018</span> <br>-->\n" +
                "<!--    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus numquam assumenda hic aliquam vero sequi velit molestias doloremque molestiae dicta?</p>-->\n" +
                "<!--  </div>-->\n" +
                "  <div id=\"results\">\n" +
                "  </div>\n" +
                "</main>", AdditionalFooter: "<script src=\"scripts/fetch.js\"></script>"}}
}

