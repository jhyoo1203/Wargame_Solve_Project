-- 사용자 데이터 삽입
INSERT INTO users (userid, rank, icon_url, nickname, name, achievement, score)
VALUES
    (1, 'Beginner', 'https://example.com/user1.png', 'user1', 'John Doe', 'Rookie', 100),
    (2, 'Intermediate', 'https://example.com/user2.png', 'user2', 'Jane Smith', 'Expert', 200),
    (3, 'Advanced', 'https://example.com/user3.png', 'user3', 'Alice Johnson', 'Master', 300),
    (4, 'Beginner', 'https://example.com/user4.png', 'user4', 'Bob Brown', 'Novice', 120),
    (5, 'Intermediate', 'https://example.com/user5.png', 'user5', 'Charlie Wilson', 'Guru', 250),
    (6, 'Advanced', 'https://example.com/user6.png', 'user6', 'David Lee', 'Legend', 380),
    (7, 'Beginner', 'https://example.com/user7.png', 'user7', 'Eva Garcia', 'Champion', 140),
    (8, 'Intermediate', 'https://example.com/user8.png', 'user8', 'Fiona Martinez', 'Master', 270),
    (9, 'Advanced', 'https://example.com/user9.png', 'user9', 'George Clark', 'Hero', 400),
    (10, 'Beginner', 'https://example.com/user10.png', 'user10', 'Hannah Rodriguez', 'Elite', 160);

-- 문제 데이터 삽입
INSERT INTO problems (problem_id, level, title, field, creator_icon_url, creator_nickname, solutions_count)
VALUES
    (1, 1, 'Problem 1', 'Programming', 'https://example.com/creator1.png', 'creator1', 3),
    (2, 3, 'Problem 2', 'Mathematics', 'https://example.com/creator2.png', 'creator2', 2),
    (3, 4, 'Problem 3', 'Data Structures', 'https://example.com/creator3.png', 'creator3', 1),
    (4, 9, 'Problem 4', 'Physics', 'https://example.com/creator4.png', 'creator4', 5),
    (5, 3, 'Problem 5', 'Chemistry', 'https://example.com/creator5.png', 'creator5', 4),
    (6, 5, 'Problem 6', 'Biology', 'https://example.com/creator6.png', 'creator6', 2),
    (7, 8, 'Problem 7', 'Geography', 'https://example.com/creator7.png', 'creator7', 3),
    (8, 2, 'Problem 8', 'History', 'https://example.com/creator8.png', 'creator8', 2),
    (9, 1, 'Problem 9', 'Literature', 'https://example.com/creator9.png', 'creator9', 1),
    (10, 2, 'Problem 10', 'Art', 'https://example.com/creator10.png', 'creator10', 4);

-- 문제 풀이 데이터 삽입
INSERT INTO solutions (solution_id, problem_id, user_id, date_submitted, solution_text)
VALUES
    (1, 1, 1, '2024-05-14', 'Solution to Problem 1 by User 1'),
    (2, 1, 2, '2024-05-15', 'Solution to Problem 1 by User 2'),
    (3, 1, 3, '2024-05-16', 'Solution to Problem 1 by User 3'),
    (4, 2, 1, '2024-05-14', 'Solution to Problem 2 by User 1'),
    (5, 2, 2, '2024-05-15', 'Solution to Problem 2 by User 2'),
    (6, 3, 3, '2024-05-16', 'Solution to Problem 3 by User 3'),
    (7, 4, 4, '2024-05-14', 'Solution to Problem 4 by User 4'),
    (8, 4, 5, '2024-05-15', 'Solution to Problem 4 by User 5'),
    (9, 5, 6, '2024-05-16', 'Solution to Problem 5 by User 6'),
    (10, 5, 7, '2024-05-14', 'Solution to Problem 5 by User 7'),
    (11, 6, 8, '2024-05-15', 'Solution to Problem 6 by User 8'),
    (12, 7, 9, '2024-05-16', 'Solution to Problem 7 by User 9'),
    (13, 8, 10, '2024-05-14', 'Solution to Problem 8 by User 10'),
    (14, 9, 1, '2024-05-15', 'Solution to Problem 9 by User 1'),
    (15, 10, 2, '2024-05-16', 'Solution to Problem 10 by User 2');
