# Console Application "Contacts"

<div align="left">
<p><b>1:</b> Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)</p>
<p>node index.js --action="list"</p>
</div>

## ![preview](./assets/1-list.png)

<div align="left">
<p><b>2:</b> Отримуємо контакт по id і виводимо у консоль об'єкт контакту або null, якщо контакту з таким id не існує.</p>
<p>node index.js --action="get" --id 05olLMgyVQdWRwgKfg5J6</p>
</div>

## ![preview](./assets/2-get.png)

<div align="left">
<p><b>3:</b> Додаємо контакт та виводимо в консоль об'єкт новоствореного контакту</p>
<p>node index.js --action="add" --name Mango --email mango@gmail.com --phone 322-22-22</p>
</div>

## ![preview](./assets/3-add.png)

<div align="left">
<p><b>4:</b> Видаляємо контакт та виводимо в консоль об'єкт видаленого контакту або null, якщо контакту з таким id не існує.</p>
<p>node index.js --action="remove" --id qdggE76Jtbfd9eWJHrssH</p>
</div>

## ![preview](./assets/4-delete.png)
