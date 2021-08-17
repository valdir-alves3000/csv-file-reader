import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateUsers1628464091229 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: 'users',
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',                     
                        isPrimary: true,
                    },                  
                    {
                        name: 'age',
                        type: 'int',
                    },
                    {
                        name: 'sex',
                        type: 'varchar',
                    },
                    {
                        name: 'school',
                        type: 'varchar',
                    },
                    {
                        name: 'area',
                        type: 'varchar',
                    },
                    {
                        name: 'office',
                        type: 'varchar',
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
    }

}
