import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class ConfigurationsMigrations1602267647723 implements MigrationInterface {

    async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "user",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "name",
                    type: "varchar",
                },
                {
                    name: "email",
                    type: "varchar",
                },
                {
                    name: "username",
                    type: "varchar",
                },
                {
                    name: "salt",
                    type: "varchar",
                },
                {
                    name: "confirmationToken",
                    type: "varchar",
                },
                {
                    name: "recoverToken",
                    type: "varchar",
                },
                {
                    name: "image",
                    type: "varchar",
                },
                {
                    name: "active",
                    type: "boolean",
                },
                {
                    name: "isDefault",
                    type: "boolean",
                },
                {
                    name: "isAdministrator",
                    type: "boolean",
                },
                {
                    name: "insertionDateTime",
                    type: "timestamp",
                    default: "now()"
                },
            ]
        }), true);
    }

    async down(queryRunner: QueryRunner): Promise<void> {
    }

}