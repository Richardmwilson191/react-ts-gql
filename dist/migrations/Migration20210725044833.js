"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Migration20210725044833 = void 0;
const migrations_1 = require("@mikro-orm/migrations");
class Migration20210725044833 extends migrations_1.Migration {
    async up() {
        this.addSql('create table `post` (`id` int unsigned not null auto_increment primary key, `created_at` datetime not null, `updated_at` datetime not null, `title` varchar(255) not null) default character set utf8mb4 engine = InnoDB;');
    }
}
exports.Migration20210725044833 = Migration20210725044833;
//# sourceMappingURL=Migration20210725044833.js.map