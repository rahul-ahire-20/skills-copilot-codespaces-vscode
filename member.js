function skillsMember() { 
    let member = {
        name: 'John',
        age: 20,
        skills: ['JS', 'React', 'Node'],
        // Method
        getSkills: function() {
            return this.skills;
        }
    };
    console.log(member.getSkills());
}