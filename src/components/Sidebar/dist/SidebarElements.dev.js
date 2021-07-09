"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SidebarRoute = exports.SideBtnWrap = exports.SidebarLink = exports.SidebarMenu = exports.SidebarWrapper = exports.Icon = exports.CloseIcon = exports.SidebarContainer = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _fa = require("react-icons/fa");

var _reactScroll = require("react-scroll");

var _reactRouterDom = require("react-router-dom");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n    border-radius:50px;\n    background:#01bf71;\n    white-space:nowrap;\n    padding:16px 64px;\n    color:#010606;\n    font-size:16px;\n    outline:none;\n    border:none;\n    cursor:pointer;\n    transition: all 0.2s ease-in-out;\n    text-decoration:none;\n\n    &:hover{\n    transition:all 0.2s ease-in-out;\n    background:#fff;\n    color:#010606;\n}\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    justify-content:center;\n\n    \n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    font-size:1.5rem;\n    text-decoration: none;\n    list-styled:none;\n    transition:0.2s ease-in-out;\n    text-decoration:none;\n    color:#fff;\n    cursor:pointer;\n\n    &:hover{\n     color:#01bf71;\n     transition:0.2s ease-in-out;\n\n    }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n\n    display:grid;\n    grid-template-columns:1fr;\n    grid-template-rows:repeat(6,80px);\n    text-align:center;\n\n    @media screen and (max-width: 480px) {\n        grid-template-rows:repeat(6,60px);\n    }\n\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n    color:#fff;\n\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n    position:absolute;\n    top:1.2rem;\n    right:1.5rem;\n    background:transparent;\n    font-size:2rem;\n    cursor:pointer;\n    outline:none;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n    color:#fff;\n\n\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n    position:fixed;\n    z-index:999;\n    width:100%;\n    height:100%100%;\n    background:#010954;\n    display:grid;\n    align-items:center;\n    top:0;\n    left:0;\n    transition:0.3s ease-in-out;\n    opacity : ", ";\n    top : ", ";\n\n    \n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

//import { GeneratedIdentifierFlags } from 'typescript';
//import { template } from 'lodash';
var SidebarContainer = _styledComponents["default"].aside(_templateObject(), function (_ref) {
  var isOpen = _ref.isOpen;
  return isOpen ? '100%' : '0';
}, function (_ref2) {
  var isOpen = _ref2.isOpen;
  return isOpen ? '0' : '-100%';
});

exports.SidebarContainer = SidebarContainer;
var CloseIcon = (0, _styledComponents["default"])(_fa.FaTimes)(_templateObject2());
exports.CloseIcon = CloseIcon;

var Icon = _styledComponents["default"].div(_templateObject3());

exports.Icon = Icon;

var SidebarWrapper = _styledComponents["default"].div(_templateObject4());

exports.SidebarWrapper = SidebarWrapper;

var SidebarMenu = _styledComponents["default"].ul(_templateObject5());

exports.SidebarMenu = SidebarMenu;
var SidebarLink = (0, _styledComponents["default"])(_reactScroll.Link)(_templateObject6());
exports.SidebarLink = SidebarLink;

var SideBtnWrap = _styledComponents["default"].div(_templateObject7());

exports.SideBtnWrap = SideBtnWrap;
var SidebarRoute = (0, _styledComponents["default"])(_reactRouterDom.Link)(_templateObject8());
exports.SidebarRoute = SidebarRoute;