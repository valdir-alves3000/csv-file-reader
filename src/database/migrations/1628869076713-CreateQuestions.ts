import {MigrationInterface, QueryRunner,Table} from "typeorm";

export class CreateQuestions1628869076713 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "questions",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                     {
                        name: "user_id",
                        type: "varchar"
                    },
                    {
                        name: "questionOne",
                        type: "varchar",
                    },
                    {
                        name: "questionTwo",
                        type: "varchar",
                    },
                    {
                        name: "questionThreen",
                        type: "varchar",
                    },
                    {
                        name: "questionThreenOne",
                        type: "varchar",
                    },
                    {
                        name: "questionThreenTwo",
                        type: "varchar",
                    },
                    {
                        name: "questionFour",
                        type: "varchar"
                    },
                    {
                        name: "month",
                        type: "varchar"
                    },
                ],
                  foreignKeys: [
                    {
                        name: "FKUserQuestions",
                        referencedTableName: "users",
                        referencedColumnNames: ["id"],
                        columnNames: ["user_id"],
                        onDelete: "SET NULL",
                        onUpdate: "SET NULL"
                    },
                  ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("questions");
    }

}
