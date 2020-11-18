import clone from "@ndhoule/clone";
import cookie from "rudder-component-cookie";
import defaults from "@ndhoule/defaults";
import json from "json3";
import topDomain from "@segment/top-domain";
import logger from "../logUtil";

/**
 * An object utility to persist values in cookies
 */
class CookieLocal {
  constructor(options) {
    console.log(options);
    this._options = {};
    this.options(options);
  }

  /**
   *
   * @param {*} options
   */
  options(options = {}) {
    if (arguments.length === 0) return this._options;
    console.log(this.get("custom_cookie_domain"));
    console.log(this.get("test_rudder"));
    console.log(this.get("rudder_cookies"));
    console.log("Check cookie");
    let domain = `.${topDomain(window.location.href)}`;
    if (domain === ".") domain = null;
    if (this.get("custom_cookie_domain")) {
      domain = this.get("custom_cookie_domain");
    }
    console.log(domain);
    // the default maxage and path
    this._options = defaults(options, {
      maxage: 31536000000,
      path: "/",
      domain,
      samesite: "Lax",
    });

    // try setting a cookie first
    this.set("test_rudder", true);
    if (!this.get("test_rudder")) {
      this._options.domain =
        this.get("custom_cookie_domain") != undefined
          ? this.get("custom_cookie_domain")
          : null;
    }
    console.log("options");
    console.log(options);
    this.remove("test_rudder");
  }

  /**
   *
   * @param {*} key
   * @param {*} value
   */
  set(key, value) {
    try {
      cookie(key, value, clone(this._options));
      return true;
    } catch (e) {
      logger.error(e);
      return false;
    }
  }

  /**
   *
   * @param {*} key
   */
  get(key) {
    return cookie(key);
  }

  /**
   *
   * @param {*} key
   */
  remove(key) {
    try {
      cookie(key, null, clone(this._options));
      return true;
    } catch (e) {
      return false;
    }
  }
}

// Exporting only the instance
const Cookie = new CookieLocal({});

export { Cookie };
