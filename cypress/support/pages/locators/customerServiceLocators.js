class CustomerServiceLocators {
    constructor() {
        this.recommendedTopics = 'ul.help-topics > :nth-child(1)';
        this.whereMyStuff = ':nth-child(2) > label';
        this.otherTopics = ':nth-child(11) > label';
        this.firstCard = '.active > :nth-child(1) > .fs-match-card';
    }
}

export default CustomerServiceLocators;