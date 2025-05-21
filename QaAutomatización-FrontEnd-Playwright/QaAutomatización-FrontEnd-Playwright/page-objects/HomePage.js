

class HomePage {
    constructor(page) {
      this.page = page;
  
      
      this.loginInput = '#user-name';
      this.passwordInput = '#password';
      this.loginButtonInput = '#login-button';
    }
  
    /**
     * Navigates to the homepage URL.
     * @param {string} url
     */
    async navigateToHomePage(url) {
      await this.page.goto(url);
    }

    
    async login(username, password) {
      await this.page.locator(this.loginInput).fill(username);
      await this.page.locator(this.passwordInput).fill(password);
    
      await this.page.locator(this.loginButtonInput).click();
    }
    /**
     * Performs a search using the search bar.
      @param {string} query
     
    async search(query) {
      await this.page.fill(this.searchInput, query);
      await this.page.click(this.searchButton);
    }
  
    /**
     * Retrieves the title of the first search result.
     * @returns {Promise<string>}
     */
    async getFirstResultTitle() {
      return await this.page.textContent(this.resultTitle);
    }
  }
  
  module.exports = HomePage;
  