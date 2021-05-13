var user = [];
user["username"] = "";
user[skill] = "";
user[user_level] = "";
user[waiting_time] = "";

function get_matches(waiting_users, match_config) {
    if (waiting_users.length != waiting_users.length - 1) {
        for (i = 0; i < waiting_users.length; i++) {
            distance_score = s_weight * user.skill + t_weight * user.waiting_time + l_weight * user.user_level
            user.skill = user1.skill - user2.skill;
            user.user_level = user1.user_level - user2.user_level;
            user.waiting_time = user1.waiting_time - user2.waiting_time;
        }
        if (distance_score <= distance_score || user.skill <= user.skill || user.user_level <= user.user_level) {
            username = user1.username + ":" + user2.username;
        }
        matches.push(username)
    }
    if (__name__ == '__main__') {
        matches = get_matches(waiting_users, match_config)
        console.log(matches);
    }
}