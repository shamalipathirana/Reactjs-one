"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.NavBtnLink = exports.NavBtn = exports.NavLinks = exports.NavItem = exports.NavMenu = exports.MobileIcon = exports.NavLogo = exports.NavbarContainer = exports.Nav = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _reactRouterDom = require("react-router-dom");

var _reactScroll = require("react-scroll");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject9() {
  var data = _taggedTemplateLiteral(["\n    border-radius:50px;\n    background:#ff7e71;\n    white-space:nowrap;\n    padding:10px 22px;\n    color:#010606;\n    outline:none;\n    border:none;\n    cursor:pointer;\n    transition:all 0.2s ease-in-out;\n    text-decoration:none;\n\n    &:hover{\n        transition:all 0.2s ease-in-out;\n        background:#b55967;\n        color:#010606;\n    }\n"]);

  _templateObject9 = function _templateObject9() {
    return data;
  };

  return data;
}

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    align-items:center;\n\n    @media screen and (max-width:768px) {\n        display:none;\n    }\n\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    color:#010954;\n    display:flex;\n    align-items:center;\n    text-decoration:none;\n    padding: 0 1rem;\n    height:100%;\n    cursor:pointer;\n    \n\n\n    &.active {\n        border-bottom:3px solid #01bf71;\n    }\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n     height : 80px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    align-items:center;\n    list-style:none;\n    text-align:center;\n    margin-right:-22px;\n\n    @media screen and (max-width:768px){\n    display:none;\n}\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    display:none;\n\n    @media screen and (max-width :768px){\n      display:block;\n      position:absolute;\n      top:0;\n      right:0;\n      tranform:translate(-100%, 60%);\n      font-size:2rem;  \n      cursor:pointer;\n      color:#fff;\n    }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    color:#fff\n    justify-self:flex-start;\n    cursor:pointer;\n    font-size:2.2rem;\n    display:flex;\n    align-items:center;\n    margin-left:2px;\n    font-weight:bold;\n    text-decoration:none;\n    \n\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n        display:flex;\n        justify-content:space-between;\n        font-size:1rem;\n        height:80px;\n        z-index:1;\n        width:100%;\n        padding:0 24px;\n        max-width:1100px;\n    \n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    background:#fff3eb;\n    height:80px;\n   /* margin-top:-80px;*/\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    font-size:1rem;\n    position:sticky;\n    top:0;\n    z-index:10;\n\n    @media screen and (max-width:960px){\n        transition:0.8s all ease;\n    }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Nav = _styledComponents["default"].nav(_templateObject());

exports.Nav = Nav;

var NavbarContainer = _styledComponents["default"].div(_templateObject2());

exports.NavbarContainer = NavbarContainer;
var NavLogo = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject3());
exports.NavLogo = NavLogo;

var MobileIcon = _styledComponents["default"].div(_templateObject4());

exports.MobileIcon = MobileIcon;

var NavMenu = _styledComponents["default"].ul(_templateObject5());

exports.NavMenu = NavMenu;

var NavItem = _styledComponents["default"].li(_templateObject6());

exports.NavItem = NavItem;
var NavLinks = (0, _styledComponents["default"])(_reactScroll.Link)(_templateObject7());
exports.NavLinks = NavLinks;

var NavBtn = _styledComponents["default"].nav(_templateObject8());

exports.NavBtn = NavBtn;
var NavBtnLink = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject9());
exports.NavBtnLink = NavBtnLink;