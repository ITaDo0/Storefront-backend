	async authenticate(firstname: string, lastname: string, password: string) {
		try {
			const conn = await Client.connect()
			const sql = `SELECT password FROM users WHERE firstname=${firstname} AND lastname=${lastname}`
			const result = await conn.query(sql)
			conn.release()
			if(result.rows.length) {
				console.log(result)
			}
		} catch (err) {
			throw new Error(`Authentication: ${err}`)
		}
	}