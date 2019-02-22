/*
 * CMS (Content Management System) pour la gestion d'élèves
 *     Copyright (C) 2019  HEBAN Simon
 *
 *     This program is free software: you can redistribute it and/or modify
 *     it under the terms of the GNU General Public License as published by
 *     the Free Software Foundation, either version 3 of the License, or
 *     (at your option) any later version.
 *
 *     This program is distributed in the hope that it will be useful,
 *     but WITHOUT ANY WARRANTY; without even the implied warranty of
 *     MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 *     GNU General Public License for more details.
 *
 *     You should have received a copy of the GNU General Public License
 *     along with this program.  If not, see <https://www.gnu.org/licenses/>.
 */

let myTable = {};

$(".multi").each(function(e) {
    $(this).children("ul").hide();
});

$(".multi").click(function (e) {
    e.preventDefault();



    if($(this).children("ul").is(":hidden")) {
        $(this).children("a").children("i").attr('class','fas fa-chevron-up');
        $(this).children("ul").show();
    } else {
        $(this).children("a").children("i").attr('class','fas fa-chevron-down');
        $(this).children("ul").hide();
    }
});