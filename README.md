1. Лоттерея. Необходимо реализовать смарт-контракт регулярной(для начала единовременной) лоттереи. Пользователи должны:
- регистрироваться, чтобы принять участие в лоттереи
- видеть на сайте количество пользователей лоттереи
- видеть общий бюджет
- знать дату лоттереи(задается в контракте)
- после окончания лоттереи иметь возможность просмотреть результаты лоттереи
- автоматически получать выплату в случае выигрыша

2. Аукцион. Owner(в дальнейшем - любой желающий) выставляет на торги лот. 
Принять участие может любой желающий, который:
- предлагает цену выше остальных
- обеспечение: 10% от лота при условии наличия полной цены на счете.
Лот ограничен по времени.

3. Партнерская программа, многоуровневая. Происходит продажа одного товара по одной и той же цене.
Пользователь может за небольшую плату зарегистрироваться как партнер.
Каждый партнер получает 5% от суммы продажи и 5% от дохода партнеров-потомков.

4. ICO. Требуется собрать от 5 до 15 ETH, если меньше - вернуть деньги инвесторам.
Пользователи покупают токены. Цена токена варьируется от времени покупки:
- в первую неделю 50% скидка(но не более 1000 проданных токенов)
- во вторую 30% скидка(но не более 5000 проданных токенов)
- в третью неделю 15% скидка( не более 10000 проданных токенов)
- в последнюю неделю 5% скидка(не более 20000 проданных токенов)
Если сумма минимальная не собрана - вернуть деньги, если раунд(или весь ICO) собирается ранее - ICO  закрывается

5. Голосование - Выборы. Проходят в несколько раундов. Первый раунд - регистрация кандидатов, ограничена по времени.
Чтобы выдвинуться как кандидат необходимо собрать за себя 30 голосов других пользователей, 
тогда кандидатура пользователя участвует в выборах.
Второй этап - выборы. Пользователи голосуют ограниченно по времени за кандидатов.
Если ни за одного из кандидатов нет 51+%, то проходит следующий раунд среди наиболее выбранных.
Публикуются результаты выборов.


6. Апостиль. Есть две стороны - пользователи и вузы. Пользователь предлагает свои данные и данные диплома на подтерждение.
Owner добавляет аккаунт вуза для подтверждения. Аккаунт вуза может подтвердить диплом и он становится approved или отвергнуть.

# TODO:
- для вызова транзакций:

var options = { from: '0x123...', gas: '300000'}; 

contract.YOUR_METHOD.sendTransaction( ARGUMENTS, options, callback);

- для вызова read-only методов

contract.YOUR_METHOD( arguments, callback);