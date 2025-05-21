
class Utils{
    constructor(page) {
        this.page = page;
    }

    async stableClick(button) {
        for (let attempt = 0; attempt < 3; attempt++) {
            try {
                await button.click();
                return; 
            } catch (error) {
                console.log(`Retrying click on button: Attempt ${attempt + 1}`);
                await button.waitFor({ state: 'visible' });
            }
        }
        throw new Error('Button click failed after multiple attempts');
    }
}

module.exports = Utils;
