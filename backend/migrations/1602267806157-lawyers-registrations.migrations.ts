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
                    type: "text",
                },
                {
                    name: "specializations",
                    type: "varchar",
                }, 
                {
                    name: "languages",
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
                    name: "oab",
                    type: "number",
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
        
        await queryRunner.createTable(new Table({
            name: "schooling",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "lawyerId",
                    type: "uuid",
                },
                {
                    name: "userId",
                    type: "uuid",
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "text",
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

        await queryRunner.createForeignKey("schooling", new TableForeignKey({
            columnNames: ["lawyerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "lawyer",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("schooling", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));

        await queryRunner.createTable(new Table({
            name: "resume",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "lawyerId",
                    type: "uuid",
                },
                {
                    name: "userId",
                    type: "uuid",
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "text",
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

        await queryRunner.createForeignKey("resume", new TableForeignKey({
            columnNames: ["lawyerId"],
            referencedColumnNames: ["id"],
            referencedTableName: "lawyer",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("resume", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));

        await queryRunner.createTable(new Table({
            name: "resume_item",
            columns: [
                {
                    name: "id",
                    type: "uuid",
                    isPrimary: true,
                    isUnique: true,
                    generationStrategy: 'uuid'
                },
                {
                    name: "resumeId",
                    type: "uuid",
                },
                {
                    name: "userId",
                    type: "uuid",
                },
                {
                    name: "title",
                    type: "varchar",
                },
                {
                    name: "description",
                    type: "text",
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

        await queryRunner.createForeignKey("resume_item", new TableForeignKey({
            columnNames: ["resumeId"],
            referencedColumnNames: ["id"],
            referencedTableName: "resume",
            onDelete: "CASCADE"
        }));

        await queryRunner.createForeignKey("resume_item", new TableForeignKey({
            columnNames: ["userId"],
            referencedColumnNames: ["id"],
            referencedTableName: "user",
            onDelete: "CASCADE"
        }));
    }


    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
