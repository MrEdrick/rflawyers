import { MigrationInterface, QueryRunner, Table, TableForeignKey } from "typeorm";

export class LawyersRegistrationsMigrations1602267806157 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: "lawyer",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "userId",
                    type: "uuid",
                },
                {
                    name: "firstName",
                    type: "varchar",
                },
                {
                    name: "lastName",
                    type: "varchar",
                },
                {
                    name: "description",
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
                    name: "insertionDateTime",
                    type: "timestamp",
                    default: "now()"
                },
            ]
        }), true);

        await queryRunner.createForeignKey("lawyer", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
