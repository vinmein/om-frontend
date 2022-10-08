"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Section13_1 = require("@component/home-1/Section13");
var Section11_1 = require("../components/home-1/Section11");
var Section2_1 = require("../components/home-1/Section2");
var Section4_1 = require("../components/home-1/Section4");
var Section7_1 = require("../components/home-1/Section7");
var Section9_1 = require("../components/home-1/Section9");
var AppLayout_1 = require("../components/layout/AppLayout");
var IndexPage = function () {
    return (<main>
        < Section2_1.default />
        < Section4_1.default />
        < Section13_1.default />
        < Section7_1.default />
        < Section9_1.default />
        < Section11_1.default />
        </main>);
};
IndexPage.layout = AppLayout_1.default;
exports.default = IndexPage;
